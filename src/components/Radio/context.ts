import { createContext, useContext } from 'react';

import { IRadioProps } from './Radio';

export type TRadioContext = Omit<IRadioProps, 'errorMsg' | 'hintText' | 'reserveSpaceForError'>;

export const RadioOptionContext = createContext<TRadioContext | null>(null);

export const useRadioOption = () => {
  const radioContextData = useContext(RadioOptionContext);
  if (RadioOptionContext === null) {
    throw Error('A Radio Option must have a Radio or FormRadio parent');
  }

  return radioContextData;
};
