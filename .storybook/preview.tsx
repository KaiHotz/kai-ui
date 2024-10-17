import React from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import Highcharts, { setOptions } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import NoChartData from 'highcharts/modules/no-data-to-display';
import Accessibility from 'highcharts/modules/accessibility';
import HighchartsCustomEvents from 'highcharts-custom-events';
import VariablePie from 'highcharts/modules/variable-pie';
import { ThemeProvider } from '../src/providers';
import { defaultHighchartsTheme } from '../src/components/Charts';
import { StoryThemeWrapper } from './StoryThemeWrapper';
import './preview.scss';

HighchartsMore(Highcharts);
NoChartData(Highcharts);
Accessibility(Highcharts);
HighchartsCustomEvents(Highcharts);
VariablePie(Highcharts);
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
