import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  title: string
  children: ReactNode
  isShow?: boolean
}

const CheckboxSection = ({ title, children, isShow }: Props) => {
  if (!isShow) return null

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.CheckboxList>{children}</S.CheckboxList>
    </S.Wrapper>
  )
}

export default CheckboxSection
