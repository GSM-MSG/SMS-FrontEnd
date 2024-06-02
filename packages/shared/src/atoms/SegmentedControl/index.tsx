import React, {
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
  text1: string
  text2: string
}

const SegmentedControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = useId()
  return (
    <S.Wrapper>
      <S.Input hidden ref={ref} {...props} type='checkbox' id={id} />
      <S.LabelWrapper htmlFor={id}>
        <S.Label>{props.text1}</S.Label>
        <S.Label>{props.text2}</S.Label>
      </S.LabelWrapper>
      <S.Slider className='Slider'>
        <S.SliderText className='text1'>{props.text1}</S.SliderText>
        <S.SliderText className='text2'>{props.text2}</S.SliderText>
      </S.Slider>
    </S.Wrapper>
  )
})

SegmentedControl.displayName = 'SegmentedControl'

export default SegmentedControl
