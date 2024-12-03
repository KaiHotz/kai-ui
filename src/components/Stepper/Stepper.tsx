import { FC } from 'react';

import { Step } from './Step';
import './Stepper.scss';

export interface IStep {
  title: string;
  onClick?: (stepIndex?: number) => void;
  canNavigateTo?: boolean;
}

export interface IStepperProps {
  steps: IStep[];
  activeStep: number;
  hideTitle?: boolean;
  onChange?: (index: number) => void;
  testId?: string;
}

export const Stepper: FC<IStepperProps> = ({ steps, activeStep, hideTitle, onChange, testId = 'ui-stepper' }) => {
  return (
    <div className="ui-stepper" data-testid={testId}>
      {steps.map((step, index) => {
        const handleClick = () => {
          if (step.canNavigateTo && onChange) {
            onChange(index);
          }
          if (step.onClick) {
            step.onClick(index);
          }
        };

        return (
          <Step
            key={`${index + 1}`}
            isFirst={index === 0}
            isLast={index === steps.length - 1}
            index={index}
            isActive={activeStep === index}
            isCompleted={activeStep > index}
            title={step.title}
            onClick={handleClick}
            hideTitle={hideTitle}
            canNavigateTo={step.canNavigateTo}
            testId={`${testId}-step`}
          />
        );
      })}
    </div>
  );
};
