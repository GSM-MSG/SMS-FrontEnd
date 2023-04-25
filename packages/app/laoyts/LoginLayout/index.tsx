import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  children: ReactNode
}

const LoginLayout = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default LoginLayout
