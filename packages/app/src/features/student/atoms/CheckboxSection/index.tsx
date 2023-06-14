import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  title: string
  children: ReactNode
}

const CheckboxSection = ({ title, children }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.CheckboxList>{children}</S.CheckboxList>
    </S.Wrapper>
  )
}

export default CheckboxSection
