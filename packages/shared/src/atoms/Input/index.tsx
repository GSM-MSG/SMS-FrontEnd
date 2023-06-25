import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import { Xmark } from '../../icons'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode
  error?: string
  onReset?: () => void
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, icon, onReset, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) props.onChange(e)
      setValue(e.target.value)
    }

    const resetHandler = () => {
      setValue('')
      if (onReset) onReset()
    }

    return (
      <S.Wrapper>
        <S.InputWrapper isDisabled={props.disabled} isFocused={isFocused}>
          {icon}
          <S.TextFiled
            {...props}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={onChange}
          />
          <S.ResetButton
            type='button'
            hidden={!value.length || !onReset || props.disabled}
            onClick={resetHandler}
          >
            <Xmark />
          </S.ResetButton>
        </S.InputWrapper>
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
