import { ChangeEvent } from 'react'
import ImageInput from '../../atoms/ImageInput'
import * as S from './style'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<string | void>
  error?: string
}

const FourImageInputs = ({ onChange, error }: Props) => {
  return (
    <>
      <S.Images>
        <ImageInput onChange={onChange} />
        <ImageInput onChange={onChange} />
        <ImageInput onChange={onChange} />
        <ImageInput onChange={onChange} />
      </S.Images>
      <S.Error>{error}</S.Error>
    </>
  )
}

export default FourImageInputs
