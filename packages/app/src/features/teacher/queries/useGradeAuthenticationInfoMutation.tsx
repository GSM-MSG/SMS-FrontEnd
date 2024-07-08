import { useMutation } from '@tanstack/react-query'
import postGradeAuthenticationInfo from '@features/teacher/service/postGradeAuthenticationInfo'

const useGradeAuthenticationInfoMutation = () => {
  return useMutation({
    mutationFn: postGradeAuthenticationInfo,
  })
}

export default useGradeAuthenticationInfoMutation
