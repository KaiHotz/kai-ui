import type { Preview } from '@storybook/react';
import { setOptions } from 'highcharts';
import 'highcharts/highcharts-more';
import 'highcharts/modules/no-data-to-display';
import 'highcharts/modules/accessibility';
import 'highcharts/modules/variable-pie';
import 'highcharts-custom-events';

import { ThemeProvider } from '../src/providers';
import { defaultHighchartsTheme } from '../src/components/Charts';
import { StoryThemeWrapper } from './StoryThemeWrapper';

import './preview.scss';

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
    (Story) => {
      return (
        <ThemeProvider name= "kai-ui" >
          <StoryThemeWrapper>
            <Story />
          </StoryThemeWrapper>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
