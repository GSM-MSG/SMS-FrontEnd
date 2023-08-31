import { useEffect, useState } from 'react'
import reissue from '@features/auth/service/reissue'
import useLocalStorage from '@features/global/hooks/useLocalStorage'
import Token from '@lib/Token'

const useAutoReissue = () => {
  const [isFocusFetch, setIsFocusFetch] = useState<boolean>(false)
  const [access, setAccess] = useLocalStorage(Token.ACCESS_TOKEN_EXP, '')
  const [refresh, setRefresh] = useLocalStorage(Token.REFRESH_TOKEN_EXP, '')

  const onReissue = async () => {
    const res = await reissue()
    if (!res) {
      setAccess('')
      setRefresh('')
      return
    }

    setAccess(res?.accessTokenExp || '')
    setRefresh(res?.refreshTokenExp || '')
  }

  const onFocusReissue = () => {
    const access = localStorage.getItem(Token.ACCESS_TOKEN_EXP)
    const refresh = localStorage.getItem(Token.REFRESH_TOKEN_EXP)
    if (!refresh || new Date(refresh) <= new Date()) {
      setAccess('')
      setRefresh('')
      return
    }

    const beforeMinute = access
      ? new Date(access).getTime() - new Date().getTime() - 10000
      : 0

    if (beforeMinute <= 0) {
      setIsFocusFetch(true)
      onReissue()
    }
  }

  const onOnlineReissue = () => {
    setIsFocusFetch(true)
    onReissue()
  }

  useEffect(() => {
    window.addEventListener('focus', onFocusReissue)
    window.addEventListener('online', onOnlineReissue)

    return () => {
      window.removeEventListener('focus', onFocusReissue)
      window.removeEventListener('online', onOnlineReissue)
    }
  }, [])

  useEffect(() => {
    if (isFocusFetch) return setIsFocusFetch(false)
    if (!access && !refresh) return
    if (new Date(refresh) <= new Date()) {
      setAccess('')
      setRefresh('')
      return
    }

    const beforeMinute = access
      ? new Date(access).getTime() - new Date().getTime() - 10000
      : 0

    const timeout = setTimeout(onReissue, beforeMinute)

    return () => clearTimeout(timeout)
  }, [access])
}

export default useAutoReissue
