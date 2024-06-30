import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import usePostAuthenticationFormMutation from '@features/student/queries/usePostAuthenticationFormMutation'
import {
  AuthenticationFormDto,
  AuthenticationFormDtoSchema,
} from '@features/student/dtos/form/AuthenticationFormDto'
import ResToAuthenticationForm from '@features/student/lib/ResToAuthenticationForm'
import { zodResolver } from '@hookform/resolvers/zod'
import formToAuthenticationFormReq from '@features/student/lib/formToAuthenticationFormReq'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'

interface Props {
  data?: AuthenticationFormResDto
}

const useAuthenticationForm = ({ data }: Props) => {
  const router = useRouter()
  const { mutate, isPending } = usePostAuthenticationFormMutation({
    onSuccess: () => {
      router.push('/')
    },
  })

  const methods = useForm<AuthenticationFormDto>({
    values: data ? ResToAuthenticationForm(data) : undefined,
    resolver: zodResolver(AuthenticationFormDtoSchema),
  })

  const onSubmit = methods.handleSubmit(async (data) => {
    mutate({
      uuid: '54030dd1-0f3b-498a-b644-747769dfdca2',
      data: formToAuthenticationFormReq(data),
    })
  })

  return { onSubmit, methods, isPending }
}

export default useAuthenticationForm
