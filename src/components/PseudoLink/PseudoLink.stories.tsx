/* eslint-disable no-console */
import type { Meta } from '@storybook/react-vite';

import { PseudoLink } from './PseudoLink';

const meta: Meta<typeof PseudoLink> = {
  title: 'Components/PseudoLink',
  component: PseudoLink,
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    children: 'Mylink',
    isStrong: false,
    onClick: () => console.log('clicked'),
  },
};

export default meta;
