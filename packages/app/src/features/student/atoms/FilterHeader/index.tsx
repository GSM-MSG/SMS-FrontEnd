import { useModal } from '@features/modal/hooks'
import * as Icon from '@sms/shared/src/icons'

import * as S from './style'

interface Props {
  reset: () => void
}

const FilterHeader = ({ reset }: Props) => {
  const { onClose } = useModal()

  return (
    <S.Wrapper>
      <S.ResetButtonWrapper>
        <S.ResetButton onClick={reset}>초기화</S.ResetButton>
      </S.ResetButtonWrapper>
      <S.FilterTitle>필터</S.FilterTitle>
      <S.CloseIconWrapper>
        <S.CloseIcon onClick={onClose}>
          <Icon.Xmark />
        </S.CloseIcon>
      </S.CloseIconWrapper>
    </S.Wrapper>
  )
}

export default FilterHeader
