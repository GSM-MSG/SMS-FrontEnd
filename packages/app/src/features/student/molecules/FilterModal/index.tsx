import ModalPortal from '@components/ModalPortal'
import useModal from '@features/student/hooks/useModal'
import FilterHeader from '@features/student/atoms/FilterHeader'
import CheckboxSection from '@features/student/atoms/CheckboxSection'
import {
  Button,
  Checkbox,
  MultiRangeSlider,
  Radio,
  SearchInput,
} from '@sms/shared'
import RangeSliderSection from '@features/student/atoms/RangeSliderSection'

import * as S from './style'

const FilterModal = () => {
  const { onClose } = useModal('filter')

  return (
    <ModalPortal onClose={onClose}>
      <S.Wrapper>
        <FilterHeader />

        <S.Content>
          <CheckboxSection title='학년'>
            <Checkbox>1학년</Checkbox>
            <Checkbox>2학년</Checkbox>
            <Checkbox>3학년</Checkbox>
          </CheckboxSection>

          <CheckboxSection title='반'>
            <Checkbox>1반</Checkbox>
            <Checkbox>2반</Checkbox>
            <Checkbox>3반</Checkbox>
            <Checkbox>4반</Checkbox>
          </CheckboxSection>

          <CheckboxSection title='학과'>
            <Checkbox>소프웨어개발과</Checkbox>
            <Checkbox>스마트IoT과</Checkbox>
            <Checkbox>인공지능과</Checkbox>
          </CheckboxSection>

          <CheckboxSection title='분야'>
            <Checkbox>Frontend</Checkbox>
            {/* 백에서 데이터를 가져올 예정*/}
          </CheckboxSection>

          <CheckboxSection title='희망 고용 형태'>
            <Checkbox>정규직</Checkbox>
            <Checkbox>비정규직</Checkbox>
            <Checkbox>계약직</Checkbox>
            <Checkbox>인턴</Checkbox>
          </CheckboxSection>

          <RangeSliderSection title='인증제 점수'>
            <MultiRangeSlider min={0} max={990} onChange={() => {}} />
          </RangeSliderSection>

          <RangeSliderSection title='희명 연봉'>
            <MultiRangeSlider min={0} max={9999} onChange={() => {}} />
          </RangeSliderSection>

          <CheckboxSection title='학번'>
            <Radio label='오름차순' name='num' />
            <Radio label='내림차순' name='num' />
          </CheckboxSection>

          <CheckboxSection title='인증제 점수'>
            <Radio label='오름차순' name='score' />
            <Radio label='내림차순' name='score' />
          </CheckboxSection>

          <CheckboxSection title='희망 연봉'>
            <Radio label='오름차순' name='salary' />
            <Radio label='내림차순' name='salary' />
          </CheckboxSection>
        </S.Content>

        <S.ButtonWrapper>
          <S.ResetButton>초기화</S.ResetButton>
          <Button>학생 38명 보기</Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </ModalPortal>
  )
}

export default FilterModal
