import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
} from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const DateInput = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) e.target.classList.add('has-value')
    else e.target.classList.remove('has-value')

    if (props.onChange) props.onChange(e)
  }

  return (
    <S.Input
      {...props}
      ref={ref}
      type='month'
      placeholder='yyyy.mm'
      onChange={onChange}
    />
  )
})

DateInput.displayName = 'DateInput'

export default DateInput
