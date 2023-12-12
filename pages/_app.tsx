import React, { useState, useMemo, createContext } from 'react'
import { AuthProvider } from '@/components/context/AuthContext'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@mui/material/styles'
import ToggleColorMode from '../components/common/ToggleColorMode'
import appTheme from '../lib/theme'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const App = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), [])

  return (
    <AuthProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={appTheme(mode)}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToggleColorMode />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthProvider>
  )
}

export default appWithTranslation(App)