import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import { XMark } from '../../icons'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  error?: string
  onReset?: () => void
  label?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, leftIcon, rightIcon, onReset, label, ...props }, ref) => {
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
          {leftIcon}
          <S.TextFiled
            {...props}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false)
              if (props.onBlur) props.onBlur(e)
            }}
            onChange={onChange}
          />

          {label && <S.Label>{label}</S.Label>}

          <S.Icon>
            {rightIcon || (
              <div
                hidden={!value.length || !onReset || props.disabled}
                onClick={resetHandler}
              >
                <XMark />
              </div>
            )}
          </S.Icon>
        </S.InputWrapper>
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
