import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  title: string
  children: ReactNode
  required?: boolean
}

const FormWrapper = ({ title, children, required = true }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>
        {title}
        {required && <S.Required>*</S.Required>}
      </S.Title>
      {children}
    </S.Wrapper>
  )
}

export default FormWrapper
