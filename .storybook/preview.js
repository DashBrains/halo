import { GlobalStyles as BaseStyles } from 'twin.macro'
import '@fontsource/nunito-sans'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <BaseStyles />
      <Story />
    </>
  ),
]
