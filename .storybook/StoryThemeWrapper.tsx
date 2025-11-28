import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import { addons } from 'storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode';

import { useTheme } from '../src/hooks';

interface IStoryThemeWrapperProps {
  children: ReactNode;
}

const channel = addons.getChannel();

export const StoryThemeWrapper: FC<IStoryThemeWrapperProps> = ({ children }) => {
  const { setTheme } = useTheme();

  const setUiTheme = useCallback(() => {
    const persitedTheme = window.localStorage.getItem('sb-addon-themes-3');
    const theme = JSON.parse(persitedTheme || '').current;

    setTheme(theme);
  }, [setTheme]);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setUiTheme);

    return () => channel.off(DARK_MODE_EVENT_NAME, setUiTheme);
  }, [setUiTheme]);

  return <div>{children}</div>;
};
