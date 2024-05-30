import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  label?: string
  children: ReactNode
}

const Field = ({ label, children, ...props }: Props) => {
  return (
    <S.Field {...props}>
      <S.Label>{label}</S.Label>
      {children}
    </S.Field>
  )
}

export default Field
