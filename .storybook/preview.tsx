import type { Preview, StoryFn } from '@storybook/react';
import Highcharts, { setOptions } from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import noChartData from 'highcharts/modules/no-data-to-display';
import accessibility from 'highcharts/modules/accessibility';
import variablePie from 'highcharts/modules/variable-pie';
import highchartsCustomEvents from 'highcharts-custom-events';

import { ThemeProvider } from '../src/providers';
import { defaultHighchartsTheme } from '../src/components/Charts';
import { StoryThemeWrapper } from './StoryThemeWrapper';

import './preview.scss';

highchartsMore(Highcharts);
accessibility(Highcharts);
variablePie(Highcharts);
highchartsCustomEvents(Highcharts as never);
noChartData(Highcharts);
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
      classTarget: 'html',
    },
  },
  decorators: [
    (Story: StoryFn) => {
      return (
        <ThemeProvider name="kai-ui">
          <StoryThemeWrapper>
            <Story />
          </StoryThemeWrapper>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
