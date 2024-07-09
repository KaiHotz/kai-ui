import React, { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { createPortal } from 'react-dom';
import { CustomFloatingFilterProps } from 'ag-grid-react';
import { FieldValues } from 'react-hook-form';
import { createPopper } from '@popperjs/core';
import * as yup from 'yup';
import { FaXmark } from 'react-icons/fa6';

import { Button } from '../../../Button';
import { Form, FormInput, IFormInputProps } from '../../../Forms';
import './InputFilter.scss';

const normalizeEmptyValue = (value: string | number | null): string | null => {
  if (value === '') {
    return null;
  }

  return String(value); // to normalize numbers and string
};

export interface InputFilterParams extends CustomFloatingFilterProps {
  placeholder?: IFormInputProps['placeholder'];
  type?: IFormInputProps['type'];
  validationSchema?: yup.ObjectSchema<FieldValues>;
  hint?: string;
}

export const InputFilter = ({
  placeholder = 'Search...',
  type,
  validationSchema,
  hint,
  currentParentModel,
  onModelChange,
}: InputFilterParams) => {
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hintAndErrorPopper = useRef<any>(null);

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

  return (
    <div className="ui-input-filter">
      <Form
        defaultValues={{
          filter: currentParentModel() || '',
        }}
        onSubmit={(values) => {
          if (values.filter.length === 0) {
            setShowHint(true);
          }
          onModelChange({ filter: normalizeEmptyValue(values.filter), filterType: 'text' });
        }}
        validationSchema={validationSchema}
        validationMode={validationSchema ? 'onChange' : 'onSubmit'}
      >
        {({ watch, trigger, resetField, formState: { errors } }) => {
          const values = watch();

          if ((errors.filter || values.filter.length === 0) && hintAndErrorPopper.current) {
            //Force update popper position when error
            hintAndErrorPopper.current.update();
          }

          return (
            <>
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
            </>
          );
        }}
      </Form>
    </div>
  );
};
