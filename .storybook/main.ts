import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  'stories': ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|mjs|ts|tsx)', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    "storybook-dark-mode",
  ],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  'docs': {},
  'core': {
    disableTelemetry: true
  },
};

export default config;
