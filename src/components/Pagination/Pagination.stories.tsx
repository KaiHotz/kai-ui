import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    current: {
      control: false,
    },
    testId: {
      control: false,
    },
  },
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function useStory(args) {
    const [currentPage, setCurrentPage] = useState(3);

    const handleSetPage = (page: number) => {
      setCurrentPage(page);
    };

    return (
      <div style={{ padding: '20px' }}>
        <Pagination {...args} current={currentPage} onChange={handleSetPage} />
      </div>
    );
  },
  args: {
    small: false,
    pages: 1000,
    fullPagination: false,
  },
};

export default meta;
