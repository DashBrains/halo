const path = require('path')
const react = require('@vitejs/plugin-react')
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  features: {
    emotionAlias: false,
  },
  core: { builder: '@storybook/builder-vite' },
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    )

    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      })
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/react': path.resolve(
        path.join(__dirname, '../node_modules/@emotion/react')
      ),
      '@emotion/styled': path.resolve(
        path.join(__dirname, '../node_modules/@emotion/styled')
      ),
      '@emotion/core': path.resolve(
        path.join(__dirname, '../node_modules/@emotion/react')
      ),
      'emotion-theming': path.resolve(
        path.join(__dirname, '../node_modules/@emotion/react')
      ),
    }
    return config
  },
}
