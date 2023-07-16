import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const DateInput = ({ ...props }: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) e.target.classList.add('has-value')
    else e.target.classList.remove('has-value')

    if (props.onChange) props.onChange(e)
  }

  return (
    <S.Input
      {...props}
      type='month'
      placeholder='yyyy.mm'
      onChange={onChange}
    />
  )
}

export default DateInput
