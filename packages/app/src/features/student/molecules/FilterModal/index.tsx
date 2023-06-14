import ModalPortal from '@components/ModalPortal'
import useModal from '@features/student/hooks/useModal'
import FilterHeader from '@features/student/atoms/FilterHeader'

import * as S from './style'

const FilterModal = () => {
  const { onClose } = useModal('filter')

  return (
    <ModalPortal onClose={onClose}>
      <S.Wrapper>
        <FilterHeader />
      </S.Wrapper>
    </ModalPortal>
  )
}

export default FilterModal
