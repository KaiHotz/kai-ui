/* eslint-disable no-console */
import React from 'react';
import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '../Form';
import { FormSwitch } from './FormSwitch';
import { Button } from '../../Button';

const meta: Meta<typeof FormSwitch> = {
  title: 'components/Forms/FormSwitch',
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
    label: '',
    disabled: false,
  },
};

export default meta;
