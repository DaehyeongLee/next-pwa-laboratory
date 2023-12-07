// FIXME: API의 호출 결과 타입을 가정하여 설정
export interface PostSignOut {
  token: string
  user: UserOut
}
export interface UserOut {
  /** 사용자 아이디 */
  id: number
  name: string
}

const LOGIN_STORAGE_KEY = 'login_key'

export const getLoginInfo = (localStorage: Storage): PostSignOut | undefined => {
  const loginInfo = localStorage.getItem(LOGIN_STORAGE_KEY)
  return loginInfo && JSON.parse(loginInfo)
}

export const setLoginInfo = (loginInfo: PostSignOut, localStorage: Storage) => {
  localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(loginInfo))
}

export const removeLoginInfo = (localStorage: Storage) => {
  localStorage.removeItem(LOGIN_STORAGE_KEY)
}
