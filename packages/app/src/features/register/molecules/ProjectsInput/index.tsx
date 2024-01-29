import HideAbleWrapper from '@features/register/atoms/HideAbleWrapper'
import {
  InputColumn,
  LinkMultiDoubleInput,
  FourImageInputs,
  IconImageInput,
} from '@features/register/atoms'
import { Input, SearchInput, MultiMonthPicker, Textarea } from '@sms/shared'
import { RegisterFormType } from '@features/register/type'
import * as Icon from '@sms/shared/src/icons'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
  useFieldArray,
  UseFormClearErrors,
} from 'react-hook-form'
import { useAutocomplete } from '@features/register/hooks'
import * as S from './style'

interface Props {
  control: Control<RegisterFormType>
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  watch: UseFormGetValues<RegisterFormType>
  setError: UseFormSetError<RegisterFormType>
  clearErrors: UseFormClearErrors<RegisterFormType>
}

const ProjectsInput = ({
  control,
  register,
  errors,
  setValue,
  watch,
  setError,
  clearErrors,
}: Props) => {
  const { fields, remove, append } = useFieldArray({
    name: 'projects',
    control,
  })
  const { onChange, dropdownList } = useAutocomplete()

  const onClick = () =>
    append({
      name: '',
      icon: '',
      links: [{ name: '', url: '' }],
      inProgress: { end: '', start: '' },
      myActivity: '',
      techStacks: [],
      description: '',
      previewImages: [],
    })

  return (
    <S.Wrapper>
      <S.ProjectList>
        {fields.map((field, idx) => (
          <div key={field.id}>
            <HideAbleWrapper
              title={watch(`projects.${idx}.name`)}
              onDelete={() => remove(idx)}
            >
              <InputColumn comment='이름'>
                <Input
                  {...register(`projects.${idx}.name`, {
                    required: {
                      value: true,
                      message: '필수 값입니다',
                    },
                    maxLength: {
                      value: 30,
                      message: '최대 30자까지 가능합니다',
                    },
                  })}
                  placeholder='프로젝트 이름입력'
                  error={errors.projects?.[idx]?.name?.message}
                />
              </InputColumn>

              <InputColumn comment='아이콘'>
                <S.IconInput>
                  <IconImageInput
                    idx={idx}
                    setValue={setValue}
                    setError={setError}
                    error={errors?.projects?.[idx]?.icon?.message}
                    clearErrors={clearErrors}
                    value={watch(`projects.${idx}.icon`)}
                    register={register(`projects.${idx}.icon`, {
                      required: { value: true, message: '필수 값입니다' },
                    })}
                  />
                </S.IconInput>
              </InputColumn>

              <InputColumn comment='미리보기 사진'>
                <FourImageInputs
                  idx={idx}
                  values={watch(`projects.${idx}.previewImages`)}
                  setValue={setValue}
                  setError={setError}
                  error={errors?.projects?.[idx]?.previewImages?.message}
                  clearErrors={clearErrors}
                  register={register(`projects.${idx}.previewImages`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                />
              </InputColumn>

              <InputColumn comment='내용'>
                <Textarea
                  {...register(`projects.${idx}.description`, {
                    required: { value: true, message: '필수 값입니다' },
                    maxLength: {
                      value: 1000,
                      message: '최대 1000자까지 가능합니다',
                    },
                  })}
                  placeholder='프로젝트 내용입력'
                  error={errors.projects?.[idx]?.description?.message}
                />
              </InputColumn>

              <InputColumn comment='사용 기술 (최대 20개)'>
                <SearchInput
                  name={`projects.${idx}.techStacks`}
                  dropdownList={dropdownList}
                  onChange={onChange}
                  limit={20}
                  value={watch(`projects.${idx}.techStacks`)}
                  control={control}
                  register={register(`projects.${idx}.techStacks`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  error={errors.projects?.[idx]?.techStacks?.message}
                />
              </InputColumn>

              <InputColumn comment='주요 작업'>
                <Textarea
                  {...register(`projects.${idx}.myActivity`, {
                    required: { value: true, message: '필수 값입니다' },
                    maxLength: {
                      value: 1000,
                      message: '최대 1000자까지 가능합니다',
                    },
                  })}
                  placeholder='주요 작업 내용서술'
                  error={errors.projects?.[idx]?.myActivity?.message}
                />
              </InputColumn>

              <InputColumn comment='진행 기간'>
                <MultiMonthPicker
                  startDateRegister={register(
                    `projects.${idx}.inProgress.start`,
                    { required: { value: true, message: '필수 값입니다' } }
                  )}
                  endDateRegister={register(`projects.${idx}.inProgress.end`, {
                    required: {
                      value: watch(`projects.${idx}.inProgress.end`) !== null,
                      message: '필수 값입니다',
                    },
                  })}
                  onChangeStartDate={(value) =>
                    setValue(`projects.${idx}.inProgress.start`, value)
                  }
                  onChangeEndDate={(value) =>
                    setValue(`projects.${idx}.inProgress.end`, value)
                  }
                  startDateError={
                    errors.projects?.[idx]?.inProgress?.start?.message
                  }
                  endDateError={
                    errors.projects?.[idx]?.inProgress?.end?.message
                  }
                  clearErrorEndDate={() =>
                    clearErrors(`projects.${idx}.inProgress.end`)
                  }
                  clearErrorStartDate={() =>
                    clearErrors(`projects.${idx}.inProgress.start`)
                  }
                  startDate={watch(`projects.${idx}.inProgress.start`)}
                  endDate={watch(`projects.${idx}.inProgress.end`)}
                />
              </InputColumn>

              <InputColumn comment='관련 링크'>
                <LinkMultiDoubleInput
                  index={idx}
                  register={register}
                  control={control}
                  errors={errors}
                />
              </InputColumn>
            </HideAbleWrapper>

            <S.Hr />
          </div>
        ))}
      </S.ProjectList>

      {fields.length === 0 && <S.Title>프로젝트</S.Title>}

      <S.ButtonWrapper>
        <S.AddButton onClick={onClick}>
          <Icon.SmallPlus type='outline' /> 추가
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProjectsInput
