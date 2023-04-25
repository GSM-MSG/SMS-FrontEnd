import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { AxiosError, isAxiosError } from 'axios'
import serverApi from './serverApi'
import Method from '@/types/Method'

interface DefinitionExtraOptions {}

interface CustomFetchArgs extends FetchArgs {
  method: Method
}

const customBaseQuery: BaseQueryFn<
  CustomFetchArgs,
  unknown,
  AxiosError | string,
  DefinitionExtraOptions,
  FetchBaseQueryMeta
> = async (args) => {
  try {
    const res = await serverApi({
      method: args.method,
      url: args.url,
      data: args.body,
    })

    return { data: res.data }
  } catch (error) {
    if (!isAxiosError(error)) return { error: String(error) }
    return { error }
  }
}

export default customBaseQuery
