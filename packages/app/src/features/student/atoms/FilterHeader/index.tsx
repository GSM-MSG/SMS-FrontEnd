import useModal from '@features/student/hooks/useModal'
import * as Icon from '@sms/shared/src/icons'

import * as S from './style'

const FilterHeader = () => {
  const { onClose } = useModal('filter')
  return (
    <S.Wrapper>
      <S.FilterTitle>필터</S.FilterTitle>
      <S.CloseIcon onClick={onClose}>
        <Icon.Xmark />
      </S.CloseIcon>
    </S.Wrapper>
  )
}

export default FilterHeader
