import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  error?: ReactNode
}

const ErrorWrapper = ({ error, children, ...props }: Props) => {
  return (
    <div {...props}>
      {children}
      {error && <S.Error>{error}</S.Error>}
    </div>
  )
}

export default ErrorWrapper
