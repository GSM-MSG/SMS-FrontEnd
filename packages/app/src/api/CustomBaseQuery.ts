import { BaseQueryFn, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosRequestConfig, isAxiosError } from 'axios'
import axiosApi from './axiosApi'

const CustomBaseQuery: BaseQueryFn<
  AxiosRequestConfig,
  unknown,
  AxiosError | string,
  object, // TODO 이게 뭐지??
  FetchBaseQueryMeta
> = async (args) => {
  try {
    const res = await axiosApi({
      ...args,
    })

    return { data: res.data }
  } catch (error) {
    if (!isAxiosError(error)) return { error: String(error) }
    return { error }
  }
}

export default CustomBaseQuery
