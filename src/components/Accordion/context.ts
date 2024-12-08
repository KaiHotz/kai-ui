import { createContext, use } from 'react';
import noop from 'lodash/noop';

export interface TAccordionSectionContext {
  onClick: () => void;
  isExpanded: boolean;
  hasSimpleSeparator?: boolean;
  testId: string;
}

export const AccordionSectionContext = createContext<TAccordionSectionContext>({
  onClick: noop,
  isExpanded: false,
  testId: 'ui-accordion-section',
});

export const useAccordionSection = () => {
  const accordionContextData = use(AccordionSectionContext);
  if (AccordionSectionContext === null) {
    throw Error('A Accordion Section must have a Accordion parent');
  }

  return accordionContextData;
};
