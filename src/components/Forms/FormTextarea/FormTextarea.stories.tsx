/* eslint-disable no-console */
import React from 'react';
import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Form } from '../Form';
import { FormTextarea } from './FormTextarea';
import { Button } from '../../Button';

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

const meta: Meta<typeof FormTextarea> = {
  title: 'Components/Forms/FormTextarea',
  component: FormTextarea,
  argTypes: {
    name: {
      control: false,
    },
    isValid: {
      control: false,
    },
    value: {
      control: false,
    },
    onChange: {
      control: false,
    },
    testId: {
      control: false,
    },
    className: {
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
};

type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
  render: (args) => {
    const schema = yup
      .object({
        textarea: args.required ? yup.string().required() : yup.string(),
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
      <Form<TFormData> validationSchema={schema} defaultValues={{ textarea: '' }} onSubmit={onSubmit} onError={onError}>
        <FormTextarea {...args} name="textarea" reserveSpaceForError />
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
  args: {
    label: '',
    labelPosition: 'top',
    labelEndAdornment: 'none',
    placeholder: '',
    hintText: '',
    disabled: false,
    required: false,
    reserveSpaceForError: false,
    maxLength: 0,
  },
};

export default meta;
