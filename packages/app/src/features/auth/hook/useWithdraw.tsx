import { useRouter } from 'next/router'
import withdraw from '@features/auth/service/withdraw'
import { studentApi } from '@features/student'
import { useToast } from '@features/toast'
import { useDialog } from '@hooks'
import TokenManager from '@lib/TokenManager'
import { useDispatch } from 'react-redux'
import { setParam } from '@store/studentParamSlice'
import useLoggedIn from './useLoggedIn'

const useWithdraw = () => {
  const { dialog } = useDialog()
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const [mutation] = studentApi.useRefetchStudentMutation()
  const { refetchLoggedIn } = useLoggedIn({})
  const router = useRouter()

  const onWithdraw = async () => {
    if (
      !(await dialog({
        title: '회원탈퇴',
        content: '정말로 회원탈퇴를 하시겠습니까?',
      }))
    )
      return

    const res = await withdraw()
    if (res) return addToast('error', res)

    TokenManager.clearToken()
    addToast('success', '회원탈퇴에 성공했습니다')
    dispatch(setParam({}))
    mutation({})
    router.push('/')
    refetchLoggedIn()
  }

  return { onWithdraw }
}

export default useWithdraw
