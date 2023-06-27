import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  title: string
  children: ReactNode
}

const RangeSliderSection = ({ title, children }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {children}
    </S.Wrapper>
  )
}

export default RangeSliderSection
