import React from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import { DocsContainer } from './DocsContainer';
import { ThemeProvider } from '../src/providers';
import { StoryThemeWrapper } from './StoryThemeWrapper';

import './preview.scss';

export const parameters: Preview['parameters'] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  darkMode: {
    stylePreview: true,
    classTarget: 'html'
  },
  viewMode: "docs",
  docs: {
    container: DocsContainer,
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <ThemeProvider name="chart-dash">
      <StoryThemeWrapper>
        <Story />
      </StoryThemeWrapper>
    </ThemeProvider>
  ),
];

