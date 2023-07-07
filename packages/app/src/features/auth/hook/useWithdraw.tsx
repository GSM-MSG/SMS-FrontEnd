import { useRouter } from 'next/router'
import withdraw from '@features/auth/service/withdraw'
import { useToast } from '@features/toast'
import { useDialog } from '@hooks'
import TokenManager from '@lib/TokenManager'
import { useDispatch } from 'react-redux'
import { resetPage } from '@store/studentParamSlice'
import { resetStudents } from '@store/studentListSlice'
import { useStudent } from '@features/student'
import useLoggedIn from './useLoggedIn'

const useWithdraw = () => {
  const { dialog } = useDialog()
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const { refetchLoggedIn } = useLoggedIn({})
  const router = useRouter()
  const { refetchStudents } = useStudent()

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
    dispatch(resetPage())
    dispatch(resetStudents())
    refetchStudents({ page: 1, size: 20 })
    router.push('/')
    refetchLoggedIn()
  }

  return { onWithdraw }
}

export default useWithdraw
