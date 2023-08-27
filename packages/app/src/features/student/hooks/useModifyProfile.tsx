import { RegisterFormType } from '@features/register/type'
import { useForm } from 'react-hook-form'
import modifyStudentService from '@features/student/service/modifyStudentService'

interface Props {
  defaultValue?: Partial<RegisterFormType>
}

const useModifyProfile = ({ defaultValue }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    watch,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm<RegisterFormType>({
    defaultValues: {
      ...defaultValue,
    },
  })

  const onSubmit = handleSubmit(async (form) => {
    await modifyStudentService(form)
  })

  return {
    register,
    control,
    onSubmit,
    resetField,
    setError,
    errors,
    setValue,
    watch,
    clearErrors,
  }
}

export default useModifyProfile
