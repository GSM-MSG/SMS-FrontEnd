import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import postAuthenticationForm, {
  Param,
} from '@features/student/service/postAuthenticationForm'

const usePostAuthenticationFormMutation = (
  props: UseMutationOptions<unknown, Error, Param, unknown>
) => {
  return useMutation({
    mutationKey: ['post-authentication-form'],
    mutationFn: postAuthenticationForm,
    ...props,
  })
}

export default usePostAuthenticationFormMutation
