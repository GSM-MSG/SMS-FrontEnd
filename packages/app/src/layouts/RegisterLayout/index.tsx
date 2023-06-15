import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  children: ReactNode
}

const RegisterLayout = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default RegisterLayout
