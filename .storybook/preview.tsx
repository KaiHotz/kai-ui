import React, {PropsWithChildren} from 'react';
import type { Preview, StoryFn } from '@storybook/react';
import Highcharts, { setOptions } from 'highcharts';
import NoChartData from 'highcharts/modules/no-data-to-display';
import Accessibility from 'highcharts/modules/accessibility';
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import cx from 'clsx';

import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import { ThemeProvider } from '../src/providers';
import { StoryThemeWrapper } from './StoryThemeWrapper';
import { defaultHighchartsTheme } from '../src/components/Charts';
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
      classTarget: 'html',
    },
    viewMode: "docs",
    docs: {
      components: ({children, ...props}: PropsWithChildren<DocsContainerProps>) => {
        const dark = useDarkMode();

        return (
          <DocsContainer
            {...props}
            theme={dark ? themes.dark : themes.light}
          >
            <div className={cx({ 'ui-docs-story--dark': dark, 'ui-docs-story--light': !dark })}>
              {children}
            </div>
          </DocsContainer>
        )
      }
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

