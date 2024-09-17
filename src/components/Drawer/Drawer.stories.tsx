import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaCircleInfo, FaTriangleExclamation } from 'react-icons/fa6';

import { Button } from '../Button';
import { Drawer } from './Drawer';

const iconOptions = {
  none: undefined,
  exclamation: <FaTriangleExclamation size={13} />,
  infoIcon: <FaCircleInfo size={13} />,
};

const iconMap = {
  none: 'None',
  exclamation: 'Exclamation',
  infoIcon: 'Information',
};

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    className: {
      control: false,
    },
    onClose: {
      control: false,
    },
    onExpand: {
      control: false,
    },
    toggleFullwidth: {
      control: false,
    },
    toggleMinimize: {
      control: false,
    },
    actions: {
      control: false,
    },
    testId: {
      control: false,
    },
    icon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: {
        type: 'select',
        labels: iconMap,
      },
    },
  },
};
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: function useStory(args) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prevOpen) => !prevOpen);

    return (
      <div style={{ padding: '20px', display: 'flex' }}>
        <div style={{ padding: '10px' }}>
          <Button variant="primary" onClick={toggleOpen}>
            Click to open Drawer
          </Button>
        </div>
        {open && (
          <Drawer {...args} onClose={toggleOpen}>
            Content goes here
          </Drawer>
        )}
      </div>
    );
  },
  args: {
    title: 'Drawer Title',
    anchor: 'right',
    isBackdropDisabled: false,
    width: '700',
    offset: 0,
    shouldCloseByEsc: true,
    shouldDisplayHeader: true,
    isMinimized: false,
    isFullWidth: false,
  },
};

export default meta;
