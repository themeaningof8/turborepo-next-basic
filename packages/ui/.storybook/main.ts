import { dirname, join, resolve } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  typescript: {
    reactDocgen: 'react-docgen'
  },
  viteFinal: (viteConfig) =>
    mergeConfig(viteConfig, {
      define: { 'process.env': {} },
      resolve: {
        alias: {
          '@ui': resolve(__dirname, '../src')
        }
      }
    })
}

export default config
