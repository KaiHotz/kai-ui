import { cloneElement, FC, Fragment, ReactElement, ReactNode, useState } from 'react';
import cx from 'clsx';
import { FaChevronDown } from 'react-icons/fa6';

import './SideNav.scss';

interface SideNavSubItem {
  title: string;
  onClick: () => void;
  pathName?: string;
}

export type SideNavItem = {
  title: string;
  pathName?: string;
  icon?: ReactElement;
  badge?: ReactNode;
  subItems?: SideNavSubItem[];
  hidden?: boolean;
  onClick?: () => void;
};

export interface SideNavProps {
  items: SideNavItem[];
}

export const SideNav: FC<SideNavProps> = ({ items }) => {
  const [expanded, setExpanded] = useState(false);
  const [activItem, setActiveItem] = useState<number | null>(null);
  const [subItem, setSubItem] = useState<number | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<number | null>(null);

  const openNav = () => {
    setExpanded(true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const handleSubmenu = (idx?: number) => {
    setActiveSubItem(null);
    if (idx && idx === subItem) {
      setSubItem(null);
    } else if (idx) {
      setSubItem(idx);
      setActiveItem(idx);
    } else {
      setSubItem(null);
    }
  };

  return (
    <nav
      className={cx('ui-side-nav', { 'ui-side-nav--expanded': expanded })}
      onMouseEnter={openNav}
      onMouseLeave={closeNav}
    >
      <ul className="ui-side-nav__menu">
        {items?.map(({ title, icon, onClick, subItems, badge, hidden, pathName }, idx) => {
          const hasSubItems = subItems && expanded;
          const showSubItems = subItem === idx;
          const isActiveItem = pathName ? window.location.pathname.startsWith(pathName) : activItem === idx;
          const showBadge = badge && expanded;

          const handleItemClick = () => {
            setActiveSubItem(null);
            setSubItem(null);
            if (onClick) {
              setActiveItem(idx);
              onClick();
            }
          };

          return (
            !hidden && (
              <Fragment key={title}>
                <li
                  className={cx('ui-side-nav__menu-item', { 'ui-side-nav__menu-item--active': isActiveItem })}
                  onClick={subItems ? () => handleSubmenu(idx) : handleItemClick}
                  role="button"
                >
                  {icon && (
                    <span className="ui-side-nav__menu-item-icon">
                      {cloneElement(icon, {
                        ...icon.props,
                        size: 16,
                      })}
                    </span>
                  )}
                  <span
                    className={cx('ui-side-nav__menu-item-title', {
                      'ui-side-nav__menu-item-title--expanded': expanded,
                    })}
                  >
                    {title}
                  </span>
                  {hasSubItems && (
                    <span
                      className={cx('ui-side-nav__menu-sub-item-icon', {
                        'ui-side-nav__menu-sub-item-icon--active': showSubItems,
                      })}
                    >
                      <FaChevronDown size={12} />
                    </span>
                  )}
                  {showBadge && badge}
                </li>
                {hasSubItems && showSubItems && (
                  <ul className="ui-side-nav__sub-menu">
                    {subItems.map(({ title, onClick, pathName }, subIdx) => {
                      const isActiveSubItem = pathName
                        ? window.location.pathname.startsWith(pathName)
                        : subIdx === activeSubItem;

                      const handleSubmenuItemClick = () => {
                        setActiveSubItem(subIdx);
                        onClick();
                      };

                      return (
                        <li
                          key={title}
                          className={cx('ui-side-nav__sub-menu-item', {
                            'ui-side-nav__sub-menu-item--active': isActiveSubItem,
                          })}
                          onClick={handleSubmenuItemClick}
                          role="button"
                        >
                          {title}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </Fragment>
            )
          );
        })}
      </ul>
    </nav>
  );
};
