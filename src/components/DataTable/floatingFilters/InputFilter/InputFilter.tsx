import { type FC, useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { createPortal } from 'react-dom';
import { CustomFloatingFilterProps } from 'ag-grid-react';
import { createPopper } from '@popperjs/core';
import * as yup from 'yup';
import { FaXmark } from 'react-icons/fa6';

import { Button } from '../../../Button';
import { Form, FormInput, IFormInputProps, IOnsubmitProps } from '../../../Forms';
import './InputFilter.scss';

const normalizeEmptyValue = (value: string | number | null): string | null => {
  if (value === '') {
    return null;
  }

  return String(value); // to normalize numbers and string
};

export interface InputFilterProps extends Omit<IFormInputProps, 'onChange'>, CustomFloatingFilterProps {
  validationSchema?: yup.ObjectSchema<{ filter: string }>;
  hint?: string;
  submitOnChange?: boolean;
}
type TFilterFormData = IOnsubmitProps<{ filter: string }>;

export const InputFilter: FC<InputFilterProps> = ({
  model,
  onModelChange,
  placeholder = 'Search...',
  type,
  validationSchema,
  hint,
  submitOnChange,
}) => {
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(undefined as unknown as HTMLInputElement);
  const popupRef = useRef<HTMLDivElement>(undefined as unknown as HTMLDivElement);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hintAndErrorPopper = useRef<any>(undefined);

  const modelWithValues = model as unknown as { filter?: string; values?: unknown[] };
  const intialValue = model
    ? model.filter ||
      (Array.isArray(modelWithValues.values) && modelWithValues.values.length > 0
        ? String(modelWithValues.values[0])
        : '')
    : '';

  useEffect(() => {
    if (popupRef.current && inputRef.current) {
      hintAndErrorPopper.current = createPopper(inputRef.current, popupRef.current, {
        placement: 'bottom-start',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [-10, 8],
            },
          },
        ],
      });
    }

    return () => hintAndErrorPopper.current.destroy();
  }, []);

  const onSubmit = ({ data }: TFilterFormData) => {
    onModelChange(
      data.filter === ''
        ? null
        : {
            type: 'contains',
            filter: data.filter,
          },
    );
  };

  return (
    <div className="ui-input-filter">
      <Form
        defaultValues={{
          filter: intialValue,
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validationMode={validationSchema ? 'onChange' : 'onSubmit'}
        submitOnChange={submitOnChange}
      >
        {({ watch, trigger, resetField, formState: { errors } }) => {
          const values = watch();

          if ((errors.filter || values.filter.length === 0) && hintAndErrorPopper.current) {
            //Force update popper position when error
            hintAndErrorPopper.current.update();
          }

          return (
            <div>
              <FormInput
                small
                name="filter"
                reserveSpaceForError={false}
                hideError
                placeholder={placeholder}
                type={type}
                onFocus={() => setShowHint(values.filter.length === 0)}
                onBlur={async (e) => {
                  setShowHint(false);
                  const validationResult = await trigger();
                  if (!validationResult) {
                    onModelChange({ filter: normalizeEmptyValue(e.target.value), filterType: 'text' });
                  }
                }}
                autoComplete="off"
                endAdornment={
                  <Button
                    variant="ghost"
                    icon={<FaXmark size={14} />}
                    onClick={() => {
                      resetField('filter');
                      onModelChange({ filter: '', filterType: 'text' });
                    }}
                  />
                }
                ref={inputRef}
              />
              {createPortal(
                <div
                  className={cx('ui-input-filter__tooltip', {
                    'ui-input-filter__tooltip--show':
                      errors?.filter || (hint && showHint && values.filter.length === 0),
                    'ui-input-filter__tooltip--error': !!errors?.filter,
                  })}
                  ref={popupRef}
                  style={{ maxWidth: inputRef.current?.clientWidth }}
                >
                  {(errors.filter?.message as string) || (hint as string)}
                </div>,
                document.body,
              )}
            </div>
          );
        }}
      </Form>
    </div>
  );
};
