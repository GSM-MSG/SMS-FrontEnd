import { axiosApi } from '@api'
import { RegisterFormType } from '@features/register/type'
import ErrorMapper from '@lib/ErrorMapper'
import errors from './errors'

const modifyStudentService = async (data: RegisterFormType) => {
  try {
    await axiosApi.put('/server/student', {
      ...data,
      prizes: data.prizes.map((prize) => ({
        name: prize.name,
        type: prize.kind,
        date: prize.date,
      })),
    })
  } catch (e) {
    return ErrorMapper(e, errors)
  }
}

export default modifyStudentService
