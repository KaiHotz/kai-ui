import React, { FC, ReactNode } from 'react';
import { useCollapse } from 'react-collapsed';
import cx from 'clsx';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import { useAccordionSection } from './context';

export interface IAccordionSectionProps {
  children: ReactNode;
  title: string;
  className?: string;
  icon?: ReactNode;
}

export const AccordionSection: FC<IAccordionSectionProps> = ({ children, className, title, icon }) => {
  const { onClick, isExpanded, hasSimpleSeparator, testId } = useAccordionSection();
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, duration: 200, easing: 'linear' });
  const isExpandable = onClick !== undefined;
  const arrowIcon = isExpanded ? <FaChevronUp /> : <FaChevronDown />;

  return (
    <div
      className={cx(
        'ui-accordion__section',
        { 'ui-accordion__section--expanded': isExpanded, 'ui-accordion__section--expandable': isExpandable },
        className,
      )}
      data-testid={testId}
    >
      <div
        className={cx('ui-accordion__section-header', {
          'ui-accordion__section-header--simple-separator': hasSimpleSeparator,
          'ui-accordion__section-header--separator': !hasSimpleSeparator,
        })}
        {...getToggleProps({ onClick })}
        data-testid={`${testId}-header`}
      >
        <div className="ui-accordion__section-header-title" data-testid={`${testId}-title`}>
          {icon}
          <span className="ui-accordion__section-header-title-text">{title}</span>
        </div>
        {isExpandable && arrowIcon}
      </div>
      <section {...getCollapseProps()} className="ui-accordion__section-content">
        {children}
      </section>
    </div>
  );
};
