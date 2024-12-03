/* eslint-disable no-console */

import * as yup from 'yup';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Form } from '../Form';
import { Button } from '../../Button';
import { ISelectOption } from '../../Select';
import { FormSelect } from './FormSelect';

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

const meta: Meta<typeof FormSelect> = {
  title: 'Components/Forms/FormSelect',
  component: FormSelect,
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

type Story = StoryObj<typeof FormSelect>;

export const Default: Story = {
  render: (args) => {
    const schema = yup
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

    return (
      <Form<TFormData> validationSchema={schema} defaultValues={{ user: { value: '', label: '' } }} onSubmit={onSubmit}>
        <FormSelect {...args} name="user" options={optionsDefault} reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export default meta;
