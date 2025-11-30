import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@chromatic-com/storybook',
    '@storybook/addon-designs',
    '@vueless/storybook-dark-mode',
    '@storybook/addon-docs',
    "@storybook/addon-vitest",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  'core': {
    'disableTelemetry': true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
