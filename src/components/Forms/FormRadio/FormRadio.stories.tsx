/* eslint-disable no-console */

import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Form, IOnsubmitProps } from '../Form';
import { FormRadio } from './FormRadio';
import { RadioOption } from '../../Radio';

const meta: Meta<typeof FormRadio> = {
  title: 'Components/Forms/FormRadio',
  component: FormRadio,
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      options: ['left', 'right'],
    },
    variant: { options: [undefined, 'text'] },
    name: {
      control: false,
    },
    selected: {
      control: false,
    },
  },
};
type Story = StoryObj<typeof FormRadio>;
export const Default: Story = {
  render: (args) => {
    const schema = yup.object({
      formRadioExample: yup.string(),
    });
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = ({ data }: IOnsubmitProps<TFormData>) => {
      alert(JSON.stringify(data));
    };
    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };

    return (
      <Form<TFormData>
        validationSchema={schema}
        defaultValues={{ formRadioExample: 'option_1' }}
        onSubmit={onSubmit}
        onError={onError}
      >
        <FormRadio {...args} name="formRadioExample">
          <RadioOption value="option_1" label="Label 1" />
          <RadioOption value="option_2" label="Label 2" />
          <RadioOption value="option_3" label="Label 3" />
          <RadioOption value="option_4" label="Label 4" disabled />
        </FormRadio>
        <button type="submit">Submit</button>
      </Form>
    );
  },
  args: {
    variant: undefined,
    labelPosition: 'left',
    hintText: '',
    disabled: false,
    isInline: false,
    reserveSpaceForError: false,
  },
};
export default meta;
