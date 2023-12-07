import { createContext, ReactNode, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getLoginInfo, removeLoginInfo, setLoginInfo, PostSignOut } from '../../lib/auth'

type Dispatch = (loginInfo: PostSignOut | undefined) => void
type AuthProviderProps = { children: ReactNode; initialState?: PostSignOut | undefined }

const AuthContext = createContext<PostSignOut | undefined>(undefined)
const AuthDispatchContext = createContext<Dispatch | null>(null)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<PostSignOut | undefined>()

  useEffect(() => {
    setUserInfo(getLoginInfo(localStorage))
  }, [])

  const handleSigned = (loginInfo: PostSignOut | undefined) => {
    // 로그인
    if (loginInfo !== undefined) {
      setLoginInfo(loginInfo, localStorage)
      router.replace('/')
    } else { // 로그아웃
      removeLoginInfo(localStorage)
      router.replace('/login')
    }
    setUserInfo(loginInfo)
  }

  return (
    <AuthContext.Provider value={userInfo}>
      <AuthDispatchContext.Provider value={handleSigned}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

const useAuth = (): PostSignOut | undefined => {
  return useContext<PostSignOut | undefined>(AuthContext)
}

const useAuthDispatch = (): Dispatch => {
  const context = useContext<Dispatch | null>(AuthDispatchContext)

  if (context === null) {
    throw new Error('context가 provider 내에서 사용되어야 합니다.')
  }
  return context
}

export { AuthProvider, useAuth, useAuthDispatch }
