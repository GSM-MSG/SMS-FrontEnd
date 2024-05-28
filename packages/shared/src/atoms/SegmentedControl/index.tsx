import * as S from './style'

export interface Props {
  text1: string
  text2: string
  isTrue: boolean
}

const SegmentedControl = ({ text1, text2, isTrue }: Props) => {
  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <S.Label>{text1}</S.Label>
        <S.Label>{text2}</S.Label>
      </S.LabelWrapper>
      <S.Slider active={isTrue}>
        <S.SliderText>{isTrue ? text1 : text2}</S.SliderText>
      </S.Slider>
    </S.Wrapper>
  )
}

SegmentedControl.displayName = 'SegmentedControl'

export default SegmentedControl
