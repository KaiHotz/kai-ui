import React from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import Highcharts, { setOptions } from 'highcharts';
import NoChartData from 'highcharts/modules/no-data-to-display';
import Accessibility from 'highcharts/modules/accessibility';

import { ThemeProvider } from '../src/providers';
import { defaultHighchartsTheme } from '../src/components/Charts';
import { StoryThemeWrapper } from './StoryThemeWrapper';
import './preview.scss';

NoChartData(Highcharts);
Accessibility(Highcharts);
setOptions(defaultHighchartsTheme);

const preview: Preview = {
  parameters: {
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
  },
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider name="kai-ui">
        <StoryThemeWrapper>
          <Story />
        </StoryThemeWrapper>
      </ThemeProvider>
    ),
  ],
};

export default preview;
