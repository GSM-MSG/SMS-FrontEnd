import { ChangeEvent } from 'react'
import * as S from './style'

const DateInput = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) e.target.classList.add('has-value')
    else e.target.classList.remove('has-value')
  }
  return <S.Input type='month' placeholder='yyyy.mm' onChange={onChange} />
}

export default DateInput
