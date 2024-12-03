import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from './Stepper';

const steps = [{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }, { title: 'Step Four' }];
const clickableSteps = [
  { title: 'Step One', canNavigateTo: true },
  { title: 'Step Two', canNavigateTo: true },
  { title: 'Step Three', canNavigateTo: true },
  { title: 'Step Four', canNavigateTo: true },
];

const stepOptions = {
  steps,
  clickableSteps,
};

const stepOptionsMap = {
  steps: 'Steps',
  clickableSteps: 'With Clickable Steps',
};

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    activeStep: {
      control: false,
    },
    onChange: {
      control: false,
    },
    steps: {
      options: Object.keys(stepOptions),
      mapping: stepOptions,
      control: {
        type: 'select',
        labels: stepOptionsMap,
      },
    },
  },
};

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: function useStory(args) {
    const [activeStep, setActiveStep] = useState(1);

    return (
      <div style={{ padding: '20px' }}>
        <Stepper {...args} activeStep={activeStep} onChange={setActiveStep} />
      </div>
    );
  },
  args: {
    steps,
    hideTitle: false,
  },
};

export default meta;
