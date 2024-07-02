import React, { FC, ReactElement, useState } from 'react';
import cx from 'clsx';

import { AccordionSectionContext } from './context';
import { IAccordionSectionProps } from './AccordionSection';
import './Accordion.scss';

export interface IAccordionProps {
  children: ReactElement<IAccordionSectionProps> | Array<ReactElement<IAccordionSectionProps> | boolean>;
  className?: string;
  initialOpenSection?: number;
  hasSimpleSeparator?: boolean;
  testId?: string;
}

export const Accordion: FC<IAccordionProps> = ({
  children,
  className,
  initialOpenSection,
  hasSimpleSeparator,
  testId = 'ui-accordion',
}) => {
  const [expandedIndex, setExpandedIndex] = useState(initialOpenSection);

  const handleExpand = (index: number) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(-1);
    }
  };

  return (
    <div className={cx('ui-accordion', className)} data-testid={testId}>
      {React.Children.map(children, (child, i) => {
        return (
          <AccordionSectionContext.Provider
            value={{
              onClick: () => handleExpand(i),
              isExpanded: expandedIndex === i,
              hasSimpleSeparator,
              testId: `${testId}-section`,
            }}
          >
            {child}
          </AccordionSectionContext.Provider>
        );
      })}
    </div>
  );
};
