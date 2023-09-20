import { OptionsType } from '@sms/shared'
import autocompleteApi from '@features/register/services/autocompleteApi'
import { useEffect } from 'react'
import { useToast } from '@features/toast'
import ErrorMapper from '@lib/ErrorMapper'
import errors from '@features/student/service/errors'
import { useDispatch } from 'react-redux'
import { close } from '@features/modal/stores/modalSlice'

const useMajorAutoComplete = () => {
  const { data, isLoading, isError, error } = autocompleteApi.useMajorQuery()
  const { addToast } = useToast()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isError) return

    addToast('error', ErrorMapper(error, errors))
    dispatch(close())
  }, [isError])

  return {
    major: data?.major.reduce((pre, cur) => {
      pre[cur] = cur
      return pre
    }, {} as OptionsType),
    majorList: data?.major,
    isLoading,
  }
}

export default useMajorAutoComplete
