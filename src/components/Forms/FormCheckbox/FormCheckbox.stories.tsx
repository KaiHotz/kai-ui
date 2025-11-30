/* eslint-disable no-console */

import * as yup from 'yup';
import { FieldErrors } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Form, IOnsubmitProps } from '../Form';
import { Button } from '../../Button';
import { FormCheckbox } from './FormCheckbox';

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

const meta: Meta<typeof FormCheckbox> = {
  title: 'Components/Forms/FormCheckbox',
  component: FormCheckbox,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: false,
    },
    checked: {
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
    label: 'Get notified',
    labelPosition: 'right',
    labelEndAdornment: 'none',
    hintText: '',
    required: false,
    disabled: false,
    variant: 'checkmark',
    reserveSpaceForError: false,
  },
};

type Story = StoryObj<typeof FormCheckbox>;

export const Default: Story = {
  render: (args) => {
    const schema = yup
      .object({
        notification: args.required ? yup.boolean().oneOf([true], 'Checkbox selection is required') : yup.boolean(),
      })
      .required();

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
        defaultValues={{ notification: false }}
        onSubmit={onSubmit}
        onError={onError}
      >
        <FormCheckbox {...args} name="notification" />
        <div style={{ marginTop: '1rem' }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    );
  },
};

export default meta;
