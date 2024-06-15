import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useId,
} from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: string
  value: string
}

export const Option = forwardRef<HTMLInputElement, Props>(
  ({ children, ...props }, ref) => {
    const id = useId()

    return (
      <>
        <S.Input type='radio' id={id} {...props} ref={ref} hidden />
        <S.Label htmlFor={id}>{children}</S.Label>
      </>
    )
  }
)

Option.displayName = 'Option'
