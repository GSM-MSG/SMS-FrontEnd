import DateInput from '../../atoms/DateInput'
import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  setStartDate(startDate: string): void
  startDate: string
  setEndDate(endDate: string): void
  endDate: string
}

const MultiDateInput = ({
  setEndDate,
  setStartDate,
  endDate,
  startDate,
}: Props) => {
  return (
    <S.Wrapper>
      <DateInput
        value={startDate || ''}
        onChange={(e) => setStartDate(e.target.value)}
        max={endDate}
      />
      <S.IconWrapper>
        <Icon.Tilde />
      </S.IconWrapper>
      <DateInput
        value={endDate || ''}
        onChange={(e) => setEndDate(e.target.value)}
        min={startDate}
      />
    </S.Wrapper>
  )
}

export default MultiDateInput
