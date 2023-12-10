import { AuthProvider } from '@/components/context/AuthContext'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
 
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default appWithTranslation(App)