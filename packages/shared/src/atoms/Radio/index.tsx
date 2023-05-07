import {
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useRef,
} from 'react'

import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Radio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    if (ref && 'current' in ref) ref.current?.click()
    else inputRef.current?.click()
  }

  return (
    <>
      <S.Input ref={ref || inputRef} {...props} type='radio' />
      <S.Wrapper onClick={onClick} id='fake-checkbox' />
    </>
  )
})

Radio.displayName = 'Radio'

export default Radio
