import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const imageOptions = {
  none: undefined,
  image: 'https://randomuser.me/api/portraits/women/22.jpg',
};

const clickHandlerOptions = {
  none: undefined,
  click: () => alert('Avatar clicked'),
};

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      options: Object.keys(imageOptions),
      mapping: imageOptions,
      control: {
        type: 'radio',
        labels: {
          none: 'Underfined',
          image: 'Image',
        },
      },
    },
    size: {
      options: [undefined, 'medium', 'small'],
      control: {
        type: 'radio',
        labels: {
          undefined: 'Undefined',
          medium: 'Medium',
          small: 'Small',
        },
      },
    },
    onClick: {
      options: Object.keys(clickHandlerOptions),
      mapping: clickHandlerOptions,
      control: {
        type: 'radio',
        labels: {
          none: 'Underfined',
          click: 'With onClick hanlder',
        },
      },
    },
  },
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => {
    return <Avatar {...args} />;
  },
  args: {
    userName: 'Max Musterman',
    onClick: undefined,
    isEditable: false,
    disabled: false,
  },
};

export default meta;
