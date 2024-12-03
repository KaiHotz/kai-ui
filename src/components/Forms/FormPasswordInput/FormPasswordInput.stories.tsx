/* eslint-disable no-console */

import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Form } from '../Form';
import { FormPasswordInput } from './FormPasswordInput';
import { Button } from '../../Button';

const iconOptions = {
  none: undefined,
  searchIcon: <FaSistrix />,
  infoIcon: <FaCircleInfo size={13} />,
};

const iconMap = {
  none: 'None',
  searchIcon: 'Search',
  infoIcon: 'Information',
  eyeIcon: 'Eye',
  eyeSlashIcon: 'Eye Slash',
};

const meta: Meta<typeof FormPasswordInput> = {
  title: 'Components/Forms/FormPasswordInput',
  component: FormPasswordInput,
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    startAdornment: 'none',
    endAdornment: 'none',
    small: false,
    disabled: false,
    required: false,
    placeholder: 'value',
    hintText: '',
    passwordToggleTooltip: '',
    passwordToggle: false,
    reserveSpaceForError: false,
    hideError: false,
  },
  argTypes: {
    name: {
      control: false,
    },
    isValid: {
      control: false,
    },
    startAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
    endAdornment: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
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
};

type Story = StoryObj<typeof FormPasswordInput>;

export const Default: Story = {
  render: (args) => {
    const schema = yup
      .object({
        password: args.required ? yup.string().required() : yup.string(),
      })
      .required();

    type TFormData = yup.InferType<typeof schema>;

    const onSubmit = (data: TFormData) => {
      alert(JSON.stringify(data));
    };

    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };

    return (
      <Form<TFormData> validationSchema={schema} defaultValues={{ password: '' }} onSubmit={onSubmit} onError={onError}>
        <FormPasswordInput {...args} name="password" reserveSpaceForError />

        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export default meta;
