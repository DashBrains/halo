import '@fontsource/nunito/200.css'
import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/800.css'
import '@fontsource/nunito/900.css'
import { createTheme, ThemeProvider } from '@mui/material'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#3B82F6',
      main: '#2563EB',
      dark: '#1D4ED8',
    },
    secondary: {
      light: '#A855F7',
      main: '#9333EA',
      dark: '#7E22CE',
    },
    success: {
      light: '#22C55E',
      main: '#16A34A',
      dark: '#166534',
    },
    error: {
      light: '#EF4444',
      main: '#DC2626',
      dark: '#991B1B',
    },
    warning: {
      light: '#F59E0B',
      main: '#D97706',
      dark: '#92400E',
    },
    info: {
      light: '#6366F1',
      main: '#4F46E5',
      dark: '#4338CA',
    },
    background: {
      default: '#f9fafb',
      paper: '#fff',
    },
    text: {
      primary: '#111827',
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  shape: {
    borderRadius: '0.375rem',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
        },
      },
    },
  },
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
