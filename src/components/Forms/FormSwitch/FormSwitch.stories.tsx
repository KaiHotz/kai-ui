/* eslint-disable no-console */
import React from 'react';
import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Form } from '../Form';
import { FormSwitch } from './FormSwitch';
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

const meta: Meta<typeof FormSwitch> = {
  title: 'Components/Forms/FormSwitch',
  component: FormSwitch,
  argTypes: {
    name: {
      control: false,
    },
    value: {
      control: false,
    },
    className: {
      control: false,
    },
    testId: {
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

type Story = StoryObj<typeof FormSwitch>;

export const Default: Story = {
  render: (args) => {
    const schema = yup
      .object({
        notification: yup.boolean(),
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
      <Form<TFormData>
        validationSchema={schema}
        defaultValues={{ notification: false }}
        onSubmit={onSubmit}
        onError={onError}
      >
        <FormSwitch {...args} name="notification" />

        <div style={{ marginTop: '10px' }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  },
  args: {
    size: undefined,
    label: '',
    labelPosition: 'right',
    labelEndAdornment: 'none',
    disabled: false,
  },
};

export default meta;
