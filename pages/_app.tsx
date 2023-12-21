import React, { useState, useMemo, createContext, useEffect } from 'react'
import { AuthProvider } from '@/components/context/AuthContext'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@mui/material/styles'
import { LinearProgress } from '@mui/material'
import ToggleColorMode from '../components/common/ToggleColorMode'
import appTheme from '../lib/theme'
import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'
import AppLayout from '@/components/layout/AppLayout'
import LoginLayout from '@/components/layout/LoginLayout'
import { NextPage } from 'next'

export const ColorModeContext = createContext({ toggleColorMode: () => { } })
export type NextPageWithLayout<Props = {}> = NextPage<Props> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
type AppPropsWithLayout = AppProps<any> & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    },
  }), [])

  // FIXME: useEffect 줄이는 방향 고려
  useEffect(() => {
    setMode(localStorage.getItem('darkMode') === 'dark' ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', mode)
  }, [mode])

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <AppLayout>
        {page}
      </AppLayout>
    ))

  if (!pageProps) {
    return <LinearProgress />
  }

  return (
    <AuthProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={appTheme(mode)}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
          <ToggleColorMode />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthProvider>
  )
}

export default appWithTranslation(App)