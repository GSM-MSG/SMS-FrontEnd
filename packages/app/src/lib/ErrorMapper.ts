import { isAxiosError } from 'axios'
import Errors from '@/types/Errors'

const ErrorMapper = (e: unknown, errors: Errors) => {
  const unknownMessage =
    '알 수 없는 에러가 발생했습니다.\n관리자에게 문의해 주세요.'

  if (
    !isAxiosError(e) ||
    !e.config ||
    !e.config.baseURL ||
    !e.config.url ||
    !e.config.method ||
    !e.status
  )
    return unknownMessage

  try {
    const message =
      errors[e.config.baseURL][e.config.url][e.config.method.toUpperCase()]

    if (!message[e.status] && !message['*']) return unknownMessage

    return message[e.status] ?? message['*']
  } catch {
    return unknownMessage
  }
}

export default ErrorMapper
