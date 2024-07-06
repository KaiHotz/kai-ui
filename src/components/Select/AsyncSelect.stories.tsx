/* eslint-disable no-console */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AsyncSelect } from './AsyncSelect';
import { ISelectOption } from './types';

const optionsDefault: ISelectOption[] = [
  { value: 'opt-1', label: 'Option 1' },
  { value: 'opt-2', label: 'Option 2' },
  { value: 'opt-3', label: 'Option 3' },
  { value: 'opt-4', label: 'Option 4' },
];

const meta: Meta<typeof AsyncSelect> = {
  title: 'components/Select/AsyncSelect',
  component: AsyncSelect,
  argTypes: {},
  args: {
    label: '',
    labelPosition: 'top',
    placeholder: '',
    hintText: '',
    errorMsg: '',
    small: false,
    required: false,
    disabled: false,
    isCreatable: false,
    reserveSpaceForError: false,
    isClearable: false,
    isMulti: false,
  },
};

type Story = StoryObj<typeof AsyncSelect>;

export const Default: Story = {
  render(args) {
    return (
      <AsyncSelect
        {...args}
        loadOptions={(search, cb: (options: ISelectOption[]) => void) => {
          console.log(search);

          return cb(optionsDefault);
        }}
      />
    );
  },
};

export default meta;
