/// <reference path="./styles.d.ts" />
import type { Preview } from '@storybook/react';
import Highcharts, { setOptions } from 'highcharts';
import HighchartsCustomEvents from 'highcharts-custom-events';
import 'highcharts/highcharts-more';
import 'highcharts/modules/no-data-to-display';
import 'highcharts/modules/accessibility';
import 'highcharts/modules/variable-pie';
import 'highcharts/modules/sankey';

import { ThemeProvider } from '../src/providers';
import { defaultHighchartsOptions } from '../src/components/Charts';
import { StoryThemeWrapper } from './StoryThemeWrapper';

import './preview.scss';

setOptions(defaultHighchartsOptions);
HighchartsCustomEvents(Highcharts);

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
    (Story) => {
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
