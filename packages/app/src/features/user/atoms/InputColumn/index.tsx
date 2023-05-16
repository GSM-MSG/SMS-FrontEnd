import { ReactNode } from 'react'
import * as S from './style'

interface Props {
  comment: string
  children: ReactNode
}

const InputColumn = ({ comment, children }: Props) => {
  return (
    <S.Wrapper>
      <S.Comment>{comment}</S.Comment>
      {children}
    </S.Wrapper>
  )
}

export default InputColumn
