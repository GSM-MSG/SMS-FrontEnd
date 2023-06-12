import { studentApi } from '@features/student'
import { useEffect } from 'react'

const useStudent = () => {
  const { data, error, isError } = studentApi.useStudentQuery({
    page: 1,
    size: 20,
  })

  useEffect(() => {
    if (!isError) return
    console.log(error)
  }, [error])

  return { data }
}

export default useStudent
