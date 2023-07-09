import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  title: string
  children: ReactNode
  isShow?: boolean
}

const RangeSliderSection = ({ title, children, isShow }: Props) => {
  if (!isShow) return null

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {children}
    </S.Wrapper>
  )
}

export default RangeSliderSection
