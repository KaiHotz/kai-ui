import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  'stories': [
    '../src/**/*.mdx',
    '../src/**/*.story.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    "storybook-dark-mode",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      }
    },
  ],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  'core': {
    disableTelemetry: true
  },
};

export default config;
