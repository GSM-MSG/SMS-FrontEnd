import React, {
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
  text1: string
  text2: string
}

const SegmentedControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <S.Wrapper>
      <S.Input
        hidden
        ref={ref}
        {...props}
        type='checkbox'
        id='SegmentedControl'
      />
      <S.LabelWrapper htmlFor='SegmentedControl'>
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
