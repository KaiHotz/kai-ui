import React from 'react';
import { FaClock, FaDesktop, FaTimeline } from 'react-icons/fa6';
import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';
import { AccordionSection } from './AccordionSection';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      control: false,
    },
    testId: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: function useAccordion(args) {
    return (
      <Accordion {...args} initialOpenSection={2}>
        <AccordionSection title="Title Section 1" icon={<FaClock />}>
          <div style={{ padding: '10px' }}>Content Section 1</div>
        </AccordionSection>
        <AccordionSection title="Title Section 2" icon={<FaDesktop />}>
          <div style={{ padding: '10px' }}>
            <p>Content Section 2</p>
            <p>Content Section 2</p>
            <p>Content Section 2</p>
            <p>Content Section 2</p>
            <p>Content Section 2</p>
          </div>
        </AccordionSection>
        <AccordionSection title="Title Section 3" icon={<FaTimeline />}>
          <div style={{ padding: '10px' }}>Content Section 3</div>
        </AccordionSection>
        <AccordionSection title="Title Section 4 without icon">
          <div style={{ padding: '10px' }}>Content Section 1</div>
        </AccordionSection>
      </Accordion>
    );
  },
  args: {
    initialOpenSection: undefined,
    hasSimpleSeparator: false,
  },
};

export default meta;
