import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode
  error?: string
  label?: string
}

const Textfield = forwardRef<HTMLInputElement, Props>(
  ({ icon, error, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) props.onChange(e)
      setValue(e.target.value)
    }

    return (
      <S.Wrapper>
        <S.InputWrapper isDisabled={props.disabled} isFocused={isFocused}>
          <S.TextFiled
            {...props}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false)
              if (props.onBlur) props.onBlur(e)
            }}
            value={value}
            onChange={onChange}
          />

          {label && <S.Label>{label}</S.Label>}

          <S.Icon>{icon}</S.Icon>
        </S.InputWrapper>
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

Textfield.displayName = 'Textfield'

export default Textfield
