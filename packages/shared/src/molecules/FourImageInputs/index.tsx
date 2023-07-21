import { ChangeEvent } from 'react'
import ImageInput from '../../atoms/ImageInput'
import * as S from './style'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<string | void>
}

const FourImageInputs = ({ onChange }: Props) => {
  return (
    <S.Wrapper>
      <ImageInput onChange={onChange} />
      <ImageInput onChange={onChange} />
      <ImageInput onChange={onChange} />
      <ImageInput onChange={onChange} />
    </S.Wrapper>
  )
}

export default FourImageInputs
