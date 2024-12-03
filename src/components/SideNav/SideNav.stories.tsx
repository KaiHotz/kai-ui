import type { Meta } from '@storybook/react';
import { FaCircleInfo, FaCreativeCommonsBy, FaRegLightbulb, FaRegUser, FaSistrix } from 'react-icons/fa6';

import { SideNav, SideNavItem } from './SideNav';

const meta: Meta<typeof SideNav> = {
  title: 'Components/SideNav',
  component: SideNav,
};

const menuItems: SideNavItem[] = [
  {
    title: 'Dashboard',
    icon: <FaSistrix />,
    onClick: () => {},
  },
  {
    title: 'Users',
    icon: <FaRegUser />,
    onClick: () => {},
  },
  {
    title: 'Fees',
    icon: <FaRegLightbulb />,
    subItems: [
      {
        title: 'Fee Charge',
        onClick: () => {},
      },
      {
        title: 'Add Referral Bonus',
        onClick: () => {},
      },
    ],
  },
  {
    title: 'Details',
    icon: <FaCreativeCommonsBy />,
    onClick: () => {},
    badge: (
      <span style={{ color: 'red' }}>
        <FaCircleInfo size={16} />
      </span>
    ),
  },
];

export const Default = {
  args: {
    items: menuItems,
  },
};

export default meta;
