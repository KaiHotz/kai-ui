import * as yup from 'yup';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaSistrix } from 'react-icons/fa6';

import { Button } from '../../Button';
import { Form } from '../Form';
import { FormDatepicker } from './FormDatepicker';

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

const meta: Meta<typeof FormDatepicker> = {
  title: 'Components/Forms/FormDatepicker',
  component: FormDatepicker,
  argTypes: {
    isValid: {
      control: false,
    },
    dropdownMode: {
      description: 'type for year and month dropdown',
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

type Story = StoryObj<typeof FormDatepicker>;

export const Default: Story = {
  render: (args) => {
    const schema = yup.object().shape({
      my_date: args.required ? yup.date().required('Required') : yup.date(),
    });

    type TFormData = yup.InferType<typeof schema>;

    const onSubmit = (data: TFormData) => {
      alert(JSON.stringify(data));
    };

    return (
      <div style={{ padding: '10px 10px 250px 10px' }}>
        <Form validationSchema={schema} defaultValues={{ my_date: new Date() }} onSubmit={onSubmit}>
          <FormDatepicker {...args} name="my_date" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  },
  args: {
    label: '',
    labelEndAdornment: 'none',
    labelPosition: 'top',
    placeholder: 'Select a date',
    hintText: '',
    required: false,
    disabled: false,
    reserveSpaceForError: true,
    showMonthDropdown: false,
    showYearDropdown: false,
    showTimeSelect: false,
    showTimeInput: false,
    dropdownMode: 'select',
    autoComplete: 'off',
  },
};

export default meta;
