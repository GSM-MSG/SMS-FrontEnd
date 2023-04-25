import { Method as AxiosMethod } from 'axios'

type Method = Exclude<
  AxiosMethod,
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch'
  | 'purge'
  | 'link'
  | 'unlink'
>

export default Method
