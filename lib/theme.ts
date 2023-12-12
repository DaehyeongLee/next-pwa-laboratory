import { createTheme } from '@mui/material/styles'

const appTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode: mode,
  },
})

export default appTheme