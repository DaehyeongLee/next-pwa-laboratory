import { createTheme } from '@mui/material/styles'

const appTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode: mode,
    common: {
      black: '#333333',
      white: '#ffffff',
    },
    primary: {
      main: '#7545cd',
      light: '#ab7ffc',
      dark: '#441899',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#999999',
    },
  },
  typography: {
    fontFamily: [
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      '"Helvetica Neue"',
      '"Segoe UI"',
      '"Apple SD Gothic Neo"',
      '"Noto Sans KR"',
      '"Malgun Gothic"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
  }
})

export default appTheme