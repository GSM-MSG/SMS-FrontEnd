import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Chip = ({ children, ...props }: Props) => {
  return (
    <S.Wrapper {...props}>
      <span>+</span>
      <span>{children}</span>
    </S.Wrapper>
  )
}

export default Chip
