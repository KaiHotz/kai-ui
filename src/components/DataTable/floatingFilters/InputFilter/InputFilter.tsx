import { type FC, useState } from 'react';
import cx from 'clsx';
import { createPortal } from 'react-dom';
import { CustomFloatingFilterProps } from 'ag-grid-react';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react';
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
}
type TFilterFormData = IOnsubmitProps<{ filter: string }>;

export const InputFilter: FC<InputFilterProps> = ({
  model,
  onModelChange,
  placeholder = 'Search...',
  type,
  validationSchema,
  hint,
}) => {
  const [showHint, setShowHint] = useState(false);

  const modelWithValues = model as unknown as { filter?: string; values?: unknown[] };
  const intialValue = model
    ? model.filter ||
      (Array.isArray(modelWithValues.values) && modelWithValues.values.length > 0
        ? String(modelWithValues.values[0])
        : '')
    : '';

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    strategy: 'fixed',
    middleware: [offset({ mainAxis: 8, crossAxis: -10 }), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

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
      >
        {({ watch, trigger, resetField, formState: { errors } }) => {
          const currentValue = watch('filter');

          return (
            <div>
              <FormInput
                size="small"
                name="filter"
                reserveSpaceForError={false}
                hideError
                placeholder={placeholder}
                type={type}
                onFocus={() => setShowHint(currentValue.length === 0)}
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
                ref={refs.setReference}
              />
              {createPortal(
                <div
                  className={cx('ui-input-filter__tooltip', {
                    'ui-input-filter__tooltip--show': errors?.filter || (hint && showHint && currentValue.length === 0),
                    'ui-input-filter__tooltip--error': !!errors?.filter,
                  })}
                  ref={refs.setFloating}
                  style={floatingStyles}
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
