import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from 'react'
import SmallXmark from '../../assets/svg/SmallXmark.svg'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
      if (ref && 'current' in ref && ref.current?.value) {
        ref.current?.focus()
        ref.current.value = ''
      }

      inputRef.current?.focus()
      if (inputRef.current?.value) inputRef.current.value = ''
    }

    const onFocus = () => setIsFocused(true)
    const onBlur = () => setIsFocused(false)

    return (
      <S.Wrapper>
        <S.InputWrapper isFocused={isFocused} onClick={onClick}>
          <S.TextFiled
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref ? ref : inputRef}
            {...props}
          />
          <S.ResetButton type='reset'>
            <img src={SmallXmark} />
          </S.ResetButton>
        </S.InputWrapper>
        <S.Error>{error}</S.Error>
      </S.Wrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
