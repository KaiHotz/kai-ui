import React, { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { ISwitchProps, Switch } from '../../Switch';

interface IFormSwitchProps extends ISwitchProps {
  name: string;
}

export const FormSwitch: FC<IFormSwitchProps> = ({ name, ...rest }) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, ref },
  } = useController({ name, control });

  return <Switch {...rest} ref={ref} value={value} onChange={onChange} />;
};
