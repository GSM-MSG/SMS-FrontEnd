import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from 'react'
import { Xmark } from '../../icons'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string
  isReset?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, isReset, ...props }, ref) => {
    const [value, setValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const onFocus = () => setIsFocused(true)
    const onBlur = () => setIsFocused(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      if (props.onChange) props.onChange(e)
    }

    const onReset = () => {
      if (props.value) return (props.value = '')
      setValue('')
    }

    return (
      <S.Wrapper>
        <S.InputWrapper isFocused={isFocused}>
          <S.TextFiled
            {...props}
            value={props.value ? props.value : value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref ? ref : inputRef}
          />
          <S.ResetButton
            style={{
              display: isReset && (props.value || value) ? 'block' : 'none',
            }}
            onClick={onReset}
          >
            <Xmark />
          </S.ResetButton>
        </S.InputWrapper>
        <S.Error>{error}</S.Error>
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
