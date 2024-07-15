import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import postAuthenticationForm from '@features/student/service/postAuthenticationForm'
import { AuthenticationFormReqDto } from '@features/student/dtos/req/AuthenticationFormReqDto'

const usePostAuthenticationFormMutation = (
  props: UseMutationOptions<unknown, Error, AuthenticationFormReqDto, unknown>
) => {
  return useMutation({
    mutationKey: ['post-authentication-form'],
    mutationFn: postAuthenticationForm,
    ...props,
  })
}

export default usePostAuthenticationFormMutation
