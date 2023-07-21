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
  > {
  error?: string
}

const DateInput = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) e.target.classList.add('has-value')
      else e.target.classList.remove('has-value')

      if (props.onChange) props.onChange(e)
    }

    return (
      <S.Wrapper>
        <S.Input
          {...props}
          ref={ref}
          type='month'
          placeholder='yyyy.mm'
          onChange={onChange}
        />
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

DateInput.displayName = 'DateInput'

export default DateInput
