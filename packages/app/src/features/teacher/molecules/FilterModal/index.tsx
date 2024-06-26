import { ModalPortal } from '@features/modal/portals'
import FilterHeader from '@features/student/atoms/FilterHeader'
import CheckboxSection from '@features/student/atoms/CheckboxSection'
import { Button, Checkbox } from '@sms/shared'
import { useForm } from 'react-hook-form'

import * as S from './style'

const FilterModal = () => {
  const { reset } = useForm()

  return (
    <ModalPortal>
      <S.Wrapper>
        <FilterHeader reset={reset} />

        <S.Content>
          <CheckboxSection isShow title='보기'>
            <Checkbox value='1'>제출</Checkbox>
            <Checkbox value='2'>미체출</Checkbox>
            <Checkbox value='3'>채점 완료</Checkbox>
          </CheckboxSection>
        </S.Content>

        <S.ButtonWrapper>
          <S.ResetButton onClick={reset}>초기화</S.ResetButton>
          <Button>확인</Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </ModalPortal>
  )
}

export default FilterModal
