import { useRouter } from 'next/router'
import logout from '@features/auth/service/logout'
import { useDialog } from '@hooks'
import { useToast } from '@features/toast'
import { useDispatch } from 'react-redux'
import { actions } from '@features/student/stores'
import useLoggedIn from './useLoggedIn'

const useLogout = () => {
  const { dialog } = useDialog()
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const { refetchLoggedIn } = useLoggedIn({})
  const router = useRouter()

  const onLogout = async () => {
    if (
      !(await dialog({
        title: '로그아웃',
        content: '정말로 로그아웃 하시겠습니까?',
      }))
    )
      return

    const res = await logout()
    if (res) return addToast('error', res)

    addToast('success', '로그아웃에 성공했습니다')
    dispatch(actions.resetPage())
    dispatch(actions.resetStudents())
    router.push('/')
    refetchLoggedIn()
  }

  return { onLogout }
}

export default useLogout
