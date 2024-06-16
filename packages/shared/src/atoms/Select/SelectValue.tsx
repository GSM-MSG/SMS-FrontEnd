import { useContext } from 'react'
import { Context } from './Context'
import * as S from './style'

interface Props {
  placeholder: string
}

const SelectValue = ({ placeholder }: Props) => {
  const { label } = useContext(Context)

  return <S.SelectValue>{label ?? placeholder}</S.SelectValue>
}

export default SelectValue
