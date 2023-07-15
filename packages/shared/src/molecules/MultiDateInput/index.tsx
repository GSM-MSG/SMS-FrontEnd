import DateInput from '../../atoms/DateInput'
import * as Icon from '../../icons'
import * as S from './style'

const MultiDateInput = () => {
  return (
    <S.Wrapper>
      <DateInput />
      <S.IconWrapper>
        <Icon.Tilde />
      </S.IconWrapper>
      <DateInput />
    </S.Wrapper>
  )
}

export default MultiDateInput
