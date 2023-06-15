import { OptionsType } from '@sms/shared'
import autocompleteApi from '@features/register/services/autocompleteApi'
import { useEffect } from 'react'

const useMajorAutoComplete = () => {
  const { data, isLoading, isError } = autocompleteApi.useMajorQuery()

  useEffect(() => {
    if (isLoading) return
    isError // TODO toast 띄우기
  }, [isLoading])

  return {
    major: data?.major.reduce((pre, cur) => {
      pre[cur] = cur
      return pre
    }, {} as OptionsType),
  }
}

export default useMajorAutoComplete
