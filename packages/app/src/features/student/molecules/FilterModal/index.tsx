import { ModalPortal } from '@features/modal/portals'
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
import useMajorAutoComplete from '@features/register/hooks/useMajorAutoComplete'
import useLoggedIn from '@features/auth/hook/useLoggedIn'

import * as S from './style'

const FilterModal = () => {
  const {
    register,
    setValue,
    onSubmit,
    getValues,
    watch,
    reset,
    control,
    onClickMajor,
  } = useStudentsFilter()
  const { onChange, dropdownList } = useAutocomplete()
  const { majorList } = useMajorAutoComplete()
  const { role } = useLoggedIn({})

  return (
    <ModalPortal>
      <S.Wrapper onSubmit={onSubmit}>
        <FilterHeader reset={reset} />

        <S.Content>
          <CheckboxSection isShow={!!role} title='학년'>
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

          <CheckboxSection isShow={!!role} title='반'>
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

          <CheckboxSection isShow={!!role} title='학과'>
            <Checkbox {...register('department')} value='SW_DEVELOPMENT'>
              소프트웨어개발과
            </Checkbox>
            <Checkbox {...register('department')} value='SMART_IOT_DEVELOPMENT'>
              스마트IoT과
            </Checkbox>
            <Checkbox {...register('department')} value='AI_DEVELOPMENT'>
              인공지능과
            </Checkbox>
          </CheckboxSection>

          <CheckboxSection isShow={true} title='분야'>
            {[...(majorList || []), '기타']?.map((major) => (
              <Checkbox
                key={major}
                value={major}
                onClick={() => onClickMajor(major)}
                checked={watch('majors')?.includes(major)}
                readOnly
              >
                {major}
              </Checkbox>
            ))}
          </CheckboxSection>

          <CheckboxSection
            isShow={role === 'ROLE_TEACHER'}
            title='희망 고용 형태'
          >
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

          <RangeSliderSection
            isShow={role === 'ROLE_TEACHER'}
            title='인증제 점수'
          >
            <MultiRangeSlider
              min={0}
              max={990}
              minValue={watch('minGsmAuthenticationScore') || 0}
              maxValue={watch('maxGsmAuthenticationScore') || 990}
              onChangeMax={(max) => setValue('maxGsmAuthenticationScore', max)}
              onChangeMin={(min) => setValue('minGsmAuthenticationScore', min)}
            />
          </RangeSliderSection>

          <RangeSliderSection
            isShow={role === 'ROLE_TEACHER'}
            title='희명 연봉'
          >
            <MultiRangeSlider
              min={0}
              max={9999}
              minValue={watch('minSalary') || 0}
              maxValue={watch('maxSalary') || 9999}
              onChangeMax={(max) => setValue('maxSalary', max)}
              onChangeMin={(min) => setValue('minSalary', min)}
            />
          </RangeSliderSection>

          <CheckboxSection isShow={!!role} title='학번'>
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

          <CheckboxSection isShow={role === 'ROLE_TEACHER'} title='인증제 점수'>
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

          <CheckboxSection isShow={role === 'ROLE_TEACHER'} title='희망 연봉'>
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

          <RangeSliderSection isShow={true} title='세부스택'>
            <SearchInput
              name='techStacks'
              dropdownList={dropdownList}
              onChange={onChange}
              value={watch('techStacks')}
              control={control}
              register={register('techStacks')}
              disableDirectInput
              error=''
            />
          </RangeSliderSection>
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
