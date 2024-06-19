import { DetailedHTMLProps, HTMLAttributes } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  error?: string
}

const ErrorMessage = ({ error, children, ...props }: Props) => {
  return (
    <div {...props}>
      {children}
      {error && <S.Error>{error}</S.Error>}
    </div>
  )
}

export default ErrorMessage
