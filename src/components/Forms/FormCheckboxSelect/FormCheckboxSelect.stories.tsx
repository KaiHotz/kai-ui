/* eslint-disable no-console */
import React from 'react';
import * as yup from 'yup';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Form } from '../Form';
import { Button } from '../../Button';
import { ISelectOption } from '../../Select';
import { FormCheckboxSelect } from './FormCheckboxSelect';

const iconOptions = {
  none: undefined,
  searchIcon: <FaSistrix size={13} />,
  infoIcon: <FaCircleInfo size={13} />,
};

const iconMap = {
  none: 'None',
  searchIcon: 'Search',
  infoIcon: 'Information',
};

const optionsDefault: ISelectOption[] = [
  { value: 'opt-1', label: 'Option 1' },
  { value: 'opt-2', label: 'Option 2' },
  { value: 'opt-3', label: 'Option 3' },
  { value: 'opt-4', label: 'Option 4' },
];

const meta: Meta<typeof FormCheckboxSelect> = {
  title: 'Components/Forms/FormCheckboxSelect',
  component: FormCheckboxSelect,
  argTypes: {
    name: {
      control: false,
    },
    labelEndAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
  },
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    placeholder: '',
    hintText: '',
    small: false,
    required: false,
    disabled: false,
    isCreatable: false,
    reserveSpaceForError: false,
    isClearable: false,
    isMulti: false,
  },
};

type Story = StoryObj<typeof FormCheckboxSelect>;

export const Default: Story = {
  render: function useFormSelect(args) {
    const schema = args.isMulti
      ? yup
          .object({
            users: args.required
              ? yup.array(
                  yup.object({
                    label: yup.string().required(),
                    value: yup.string().required(),
                  }),
                )
              : yup.array(
                  yup.object({
                    label: yup.string(),
                    value: yup.string(),
                  }),
                ),
          })
          .required()
      : yup
          .object({
            user: args.required
              ? yup.object({
                  label: yup.string().required(),
                  value: yup.string().required(),
                })
              : yup.object({
                  label: yup.string(),
                  value: yup.string(),
                }),
          })
          .required();

    type TFormData = yup.InferType<typeof schema>;

    const onSubmit = (data: TFormData) => {
      console.log({ data });

      alert(JSON.stringify(data));
    };

    const defaultValues = args.isMulti ? { users: undefined } : { user: undefined };
    const name = args.isMulti ? 'users' : 'user';

    return (
      <Form<TFormData> validationSchema={schema} defaultValues={defaultValues} onSubmit={onSubmit}>
        <FormCheckboxSelect {...args} name={name} options={optionsDefault} reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export default meta;
