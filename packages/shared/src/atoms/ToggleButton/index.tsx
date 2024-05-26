import { useState } from 'react'
import * as S from './style'

export interface Props {
  text1: string
  text2: string
}

const ToggleButton = ({ text1, text2 }: Props) => {
  const [isTrue, setIsTrue] = useState(true)

  const handleToggle = () => setIsTrue(!isTrue)

  return (
    <S.Wrapper onClick={handleToggle}>
      <S.LabelWrapper>
        <div>{text1}</div>
        <div>{text2}</div>
      </S.LabelWrapper>
      <S.Slider active={isTrue}>
        <span>{isTrue ? text1 : text2}</span>
      </S.Slider>
    </S.Wrapper>
  )
}

ToggleButton.displayName = 'ToggleButton'

export default ToggleButton
