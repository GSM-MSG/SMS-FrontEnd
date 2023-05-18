import { ButtonHTMLAttributes } from 'react'
import { Trash } from '../../icons'
import * as S from './style'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DeleteButton = ({ ...props }: Props) => {
  return (
    <S.Wrapper {...props}>
      <Trash />
    </S.Wrapper>
  )
}

export default DeleteButton
