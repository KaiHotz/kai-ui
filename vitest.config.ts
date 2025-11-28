import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      exclude: ['node_modules'],
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
    },
  }),
);
