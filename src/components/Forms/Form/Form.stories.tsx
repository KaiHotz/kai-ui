/* eslint-disable no-console */

import type { Meta, StoryObj } from '@storybook/react-vite';
import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa6';

import { Button } from '../../Button';
import { Form, IOnsubmitProps } from './Form';
import { FormInput } from '../FormInput';
import { FormPasswordInput } from '../FormPasswordInput';
import { FormDatepicker } from '../FormDatepicker';
import { FormRadio, RadioOption } from '../FormRadio';
import { FormCheckbox } from '../FormCheckbox';
import { FormSelect } from '../FormSelect';
import { capitalizeWords } from '../../../utils';

const validationModes = ['onBlur', 'onChange', 'onSubmit', 'onTouched', 'all'] as const;

const meta: Meta<typeof Form> = {
  title: 'Components/Forms/Form',
  component: Form,
  tags: ['autodocs'],
  args: {
    submitOnChange: false,
    validationMode: 'onChange',
  },
  argTypes: {
    children: {
      control: false,
    },
    validationSchema: {
      control: false,
    },
    defaultValues: {
      control: false,
    },
    onSubmit: {
      control: false,
    },
    onError: {
      control: false,
    },
    validationMode: {
      options: validationModes,
      control: {
        type: 'select',
        labels: validationModes,
      },
    },
  },
};
type Story = StoryObj<typeof Form>;
export const Default: Story = {
  render: (args) => {
    const schema = yup
      .object({
        firstName: yup.string().required('this field is required'),
        lastName: yup.string().required('this field is required'),
        email: yup.string().email().required('this field is required'),
        user: yup.object({
          label: yup.string().required('this field is required'),
          value: yup.string().required('this field is required'),
        }),
        dob: yup.date().required('this field is required'),
        password: yup.string().required('this field is required'),
        formRadioExample: yup.string(),
        notification: yup.boolean(),
      })
      .required();
    type TFormData = yup.InferType<typeof schema>;
    const onSubmit = ({ data, reset }: IOnsubmitProps<TFormData>) => {
      console.log(data);
      reset();
    };
    const onError = (errors: FieldErrors<TFormData>) => {
      console.log(errors);
      //Handle form error here
    };

    return (
      <Form<TFormData>
        {...args}
        validationSchema={schema}
        defaultValues={{
          firstName: '',
          lastName: '',
          email: '',
          user: undefined,
          dob: undefined,
          password: '',
          formRadioExample: 'opt_1',
          notification: false,
        }}
        onSubmit={onSubmit}
        onError={onError}
      >
        {({ setValue }) => {
          return (
            <>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <FormInput
                  name="firstName"
                  label="First name"
                  placeholder="Enter your first name"
                  required
                  reserveSpaceForError
                  onChange={(e) => {
                    setValue('firstName', capitalizeWords(e.target.value), { shouldValidate: true });
                  }}
                />
                <FormInput
                  name="lastName"
                  label="Last name"
                  placeholder="Enter your last name"
                  required
                  reserveSpaceForError
                  onChange={(e) => {
                    setValue('lastName', capitalizeWords(e.target.value), { shouldValidate: true });
                  }}
                />
              </div>
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter your E-mail"
                required
                reserveSpaceForError
                endAdornment={<FaEnvelope />}
              />
              <FormSelect
                name="user"
                label="User"
                placeholder="Select a user"
                required
                reserveSpaceForError
                options={[
                  { value: 'user-1', label: 'User 1' },
                  { value: 'user-2', label: 'User 2' },
                  { value: 'user-3', label: 'User 3' },
                  { value: 'user-4', label: 'User 4' },
                ]}
              />
              <FormDatepicker
                label="Date of birth"
                name="dob"
                placeholder="Date of birth"
                maxDate={new Date()}
                required
                reserveSpaceForError
              />
              <FormPasswordInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                passwordToggle
                required
                reserveSpaceForError
              />
              <FormRadio name="formRadioExample" reserveSpaceForError isInline>
                <RadioOption value="option_1" label="Label 1" />
                <RadioOption value="option_2" label="Label 2" />
                <RadioOption value="option_3" label="Label 3" />
                <RadioOption value="option_4" label="Label 4" disabled />
              </FormRadio>
              <FormCheckbox name="notification" reserveSpaceForError label="Get notified" />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '10px',
                }}
              >
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </>
          );
        }}
      </Form>
    );
  },
};
export default meta;
