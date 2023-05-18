import { RegisterFormType } from '@features/register/type'
import { useForm } from 'react-hook-form'

const useRegister = () => {
  const { register, control, handleSubmit } = useForm<RegisterFormType>()

  const onSubmit = handleSubmit((form: RegisterFormType) => {
    console.log(form)
  })

  return { register, control, onSubmit }
}

export default useRegister
