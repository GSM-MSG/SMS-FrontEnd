import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'

import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text1: string
  text2: string
}

const SegmentedControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const inputElement =
      ref && 'current' in ref ? ref.current : inputRef.current

    const handleChange = () => {
      setChecked(inputElement?.checked || false)
    }

    if (inputElement) {
      inputElement.addEventListener('change', handleChange)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('change', handleChange)
      }
    }
  }, [])

  const handleClick = () => {
    const inputElement =
      ref && 'current' in ref ? ref.current : inputRef.current
    if (inputElement) {
      inputElement.checked = !inputElement.checked
      setChecked(inputElement.checked)
    }
  }

  return (
    <S.Wrapper>
      <input hidden ref={ref || inputRef} {...props} type='checkbox' />
      <S.LabelWrapper onClick={handleClick}>
        <S.Label>{props.text1}</S.Label>
        <S.Label>{props.text2}</S.Label>
      </S.LabelWrapper>
      <S.Slider checked={checked}>
        <S.SliderText>{checked ? props.text2 : props.text1}</S.SliderText>
      </S.Slider>
    </S.Wrapper>
  )
})

SegmentedControl.displayName = 'SegmentedControl'

export default SegmentedControl
