import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { countries } from '../../utils';
import { PseudoLink } from '../PseudoLink';
import { DataRows } from './DataRows';
import { IDataRowsdDef } from './types';

const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@mail.com',
  phone: {
    number: '1234567890',
    code: '+1',
    country: 'US',
  },
};

const rowDefs: Record<string, IDataRowsdDef<typeof data>[]> = {
  default: [
    {
      field: 'firstName',
      label: 'First Name',
    },
    {
      field: 'lastName',
      label: 'Last Name',
    },
    {
      field: 'email',
      label: 'Email',
    },
    {
      field: 'phone.number',
      label: 'Phone Number',
    },
    {
      field: 'phone.country',
      label: 'Country',
    },
  ],
  withHiddenField: [
    {
      field: 'firstName',
      label: 'First Name',
    },
    {
      field: 'lastName',
      label: 'Last Name',
    },
    {
      field: 'email',
      label: 'Email',
      hide: true,
    },
    {
      field: 'phone.number',
      label: 'Phone Number',
    },
    {
      field: 'phone.country',
      label: 'Country',
    },
  ],
  withFormatedValues: [
    {
      field: 'firstName',
      label: 'Full Name',
      valueFormatter: (data) => `${data.firstName} ${data.lastName}`,
    },
    {
      field: 'email',
      label: 'Email',
      valueFormatter: (data) => (
        <PseudoLink
          onClick={() => {
            alert(`Email: ${data.email}`);
          }}
        >
          {data.email}
        </PseudoLink>
      ),
    },
    {
      field: 'phone.number',
      label: 'Phone Number',
      valueFormatter: (data) => `(${data.phone.code}) ${data.phone.number}`,
    },
    {
      field: 'phone.country',
      label: 'Country',
      valueFormatter: (data) => countries[data.phone.country],
    },
  ],
  withClickableRows: [
    {
      field: 'firstName',
      label: 'First Name',
    },
    {
      field: 'lastName',
      label: 'Last Name',
    },
    {
      field: 'email',
      label: 'Email',
      onClick: (data) => alert(`Email: ${data.email}`),
    },
    {
      field: 'phone.number',
      label: 'Phone Number',
    },
    {
      field: 'phone.country',
      label: 'Country',
      onClick: (data) => alert(`Phone number: ${data.phone.code} ${data.phone.number}`),
    },
  ],
};

const rowDefsMap = {
  default: 'Default',
  withHiddenField: 'With Hidden Field',
  withFormatedValues: 'With Formated Values',
  withClickableRows: 'With Clickable Rows',
};

const meta: Meta<typeof DataRows> = {
  title: 'Components/DataRows',
  component: DataRows,
  argTypes: {
    rowDef: {
      options: Object.keys(rowDefs),
      mapping: rowDefs,
      control: {
        type: 'select',
        labels: rowDefsMap,
      },
    },
  },
};

type Story = StoryObj<typeof DataRows>;

export const Default: Story = {
  render: (args) => {
    return <DataRows {...args} />;
  },
  args: {
    data,
    rowDef: [],
    hasDivider: true,
  },
};

export default meta;
