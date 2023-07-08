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
import useStudentsFilter from '@features/student/hooks/useStudentsFilter'
import { useAutocomplete } from '@features/register/hooks'

import * as S from './style'

const FilterModal = () => {
  const { onClose } = useModal('filter')
  const {
    register,
    setValue,
    onSubmit,
    getValues,
    watch,
    reset,
    minSalary,
    minGsmAuthenticationScore,
    maxSalary,
    maxGsmAuthenticationScore,
  } = useStudentsFilter()
  const { onChange, dropdownList } = useAutocomplete()

  return (
    <ModalPortal onClose={onClose}>
      <S.Wrapper onSubmit={onSubmit}>
        <FilterHeader />

        <S.Content>
          <CheckboxSection title='학년'>
            <Checkbox
              {...register('grade')}
              defaultChecked={getValues('grade')?.includes(1)}
              value='1'
            >
              1학년
            </Checkbox>
            <Checkbox
              {...register('grade')}
              defaultChecked={getValues('grade')?.includes(2)}
              value='2'
            >
              2학년
            </Checkbox>
            <Checkbox
              {...register('grade')}
              defaultChecked={getValues('grade')?.includes(3)}
              value='3'
            >
              3학년
            </Checkbox>
          </CheckboxSection>

          <CheckboxSection title='반'>
            <Checkbox
              {...register('classNum')}
              defaultChecked={getValues('classNum')?.includes(1)}
              value='1'
            >
              1반
            </Checkbox>
            <Checkbox
              {...register('classNum')}
              defaultChecked={getValues('classNum')?.includes(2)}
              value='2'
            >
              2반
            </Checkbox>
            <Checkbox
              {...register('classNum')}
              defaultChecked={getValues('classNum')?.includes(3)}
              value='3'
            >
              3반
            </Checkbox>
            <Checkbox
              {...register('classNum')}
              defaultChecked={getValues('classNum')?.includes(4)}
              value='4'
            >
              4반
            </Checkbox>
          </CheckboxSection>

          <CheckboxSection title='학과'>
            <Checkbox {...register('department')} value='SW_DEVELOPMENT'>
              소프웨어개발과
            </Checkbox>
            <Checkbox {...register('department')} value='SMART_IOT_DEVELOPMENT'>
              스마트IoT과
            </Checkbox>
            <Checkbox {...register('department')} value='AI_DEVELOPMENT'>
              인공지능과
            </Checkbox>
          </CheckboxSection>

          <CheckboxSection title='분야'>
            <Checkbox>Frontend</Checkbox>
            {/* 백에서 데이터를 가져올 예정*/}
          </CheckboxSection>

          <CheckboxSection title='희망 고용 형태'>
            <Checkbox {...register('formOfEmployment')} value='FULL_TIME'>
              정규직
            </Checkbox>
            <Checkbox {...register('formOfEmployment')} value='TEMPORARY'>
              비정규직
            </Checkbox>
            <Checkbox {...register('formOfEmployment')} value='CONTRACT'>
              계약직
            </Checkbox>
            <Checkbox {...register('formOfEmployment')} value='INTERN'>
              인턴
            </Checkbox>
          </CheckboxSection>

          <RangeSliderSection title='인증제 점수'>
            <MultiRangeSlider
              min={0}
              max={990}
              minDefaultValue={minGsmAuthenticationScore}
              maxDefaultValue={maxGsmAuthenticationScore}
              onChange={(min, max) => {
                setValue('minGsmAuthenticationScore', min)
                setValue('maxGsmAuthenticationScore', max)
              }}
            />
          </RangeSliderSection>

          <RangeSliderSection title='희명 연봉'>
            <MultiRangeSlider
              min={0}
              max={9999}
              minDefaultValue={minSalary}
              maxDefaultValue={maxSalary}
              onChange={(min, max) => {
                setValue('minSalary', min)
                setValue('maxSalary', max)
              }}
            />
          </RangeSliderSection>

          <CheckboxSection title='학번'>
            <Radio
              {...register('stuNumSort')}
              value='ASCENDING'
              label='오름차순'
            />
            <Radio
              {...register('stuNumSort')}
              value='DESCENDING'
              label='내림차순'
            />
          </CheckboxSection>

          <CheckboxSection title='인증제 점수'>
            <Radio
              {...register('gsmAuthenticationScoreSort')}
              label='오름차순'
              value='ASCENDING'
            />
            <Radio
              {...register('gsmAuthenticationScoreSort')}
              label='내림차순'
              value='DESCENDING'
            />
          </CheckboxSection>

          <CheckboxSection title='희망 연봉'>
            <Radio
              {...register('salarySort')}
              label='오름차순'
              value='ASCENDING'
            />
            <Radio
              {...register('salarySort')}
              label='내림차순'
              value='DESCENDING'
            />
          </CheckboxSection>

          <RangeSliderSection title='세부스택'>
            <SearchInput
              setValue={setValue}
              name='techStacks'
              dropdownList={dropdownList}
              onChange={onChange}
              value={watch('techStacks')}
            />
          </RangeSliderSection>
        </S.Content>

        <S.ButtonWrapper>
          <S.ResetButton onClick={reset}>초기화</S.ResetButton>
          <Button>학생 38명 보기</Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </ModalPortal>
  )
}

export default FilterModal
