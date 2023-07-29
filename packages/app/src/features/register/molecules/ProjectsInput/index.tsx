import HideableWrapper from '@features/register/atoms/HideableWrapper'
import {
  InputColumn,
  LinkMultiDoubleInput,
  FourImageInputs,
  IconImageInput,
} from '@features/register/atoms'
import { Input, SearchInput, MultiDateInput } from '@sms/shared'
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
            <HideableWrapper
              title={watch(`projects.${idx}.name`)}
              onDelete={fields.length > 1 ? () => remove(idx) : () => {}}
            >
              <InputColumn comment='이름'>
                <Input
                  {...register(`projects.${idx}.name`, {
                    required: { value: true, message: '필수 값입니다' },
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
                  />
                </S.IconInput>
              </InputColumn>

              <InputColumn comment='미리보기 사진'>
                <FourImageInputs
                  idx={idx}
                  values={watch(`projects.${idx}.previewImages`)}
                  setValue={setValue}
                  setError={setError}
                  clearErrors={clearErrors}
                />
              </InputColumn>

              <InputColumn comment='내용'>
                <Input
                  {...register(`projects.${idx}.description`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  placeholder='프로젝트 내용입력'
                  error={errors.projects?.[idx]?.description?.message}
                />
              </InputColumn>

              <InputColumn comment='사용 기술 (최대 20개)'>
                <SearchInput
                  name={`projects.${idx}.techStacks`}
                  dropdownList={dropdownList}
                  setValue={setValue}
                  onChange={onChange}
                  limit={20}
                  value={watch(`projects.${idx}.techStacks`)}
                />
              </InputColumn>

              <InputColumn comment='주요 작업'>
                <Input
                  {...register(`projects.${idx}.myActivity`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  placeholder='주요 작업 내용서술'
                  error={errors.projects?.[idx]?.myActivity?.message}
                />
              </InputColumn>

              <InputColumn comment='진행 기간'>
                <MultiDateInput
                  startDateRegister={register(
                    `projects.${idx}.inProgress.start`,
                    { required: { value: true, message: '필수 값입니다' } }
                  )}
                  endDateRegister={register(`projects.${idx}.inProgress.end`, {
                    required: { value: true, message: '필수 값입니다' },
                  })}
                  startDateError={
                    errors.projects?.[idx]?.inProgress?.start?.message
                  }
                  endDateError={
                    errors.projects?.[idx]?.inProgress?.end?.message
                  }
                  min={watch(`projects.${idx}.inProgress.start`)}
                  max={watch(`projects.${idx}.inProgress.end`)}
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
            </HideableWrapper>

            <S.Hr />
          </div>
        ))}
      </S.ProjectList>

      <S.ButtonWrapper>
        <S.AddButton onClick={onClick}>
          <Icon.SmallPlus type='outline' /> 추가
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProjectsInput
