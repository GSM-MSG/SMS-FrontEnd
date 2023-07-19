import HideableWrapper from '@features/register/atoms/HideableWrapper'
import { InputColumn, LinkMultiDoubleInput } from '@features/register/atoms'
import {
  Input,
  ImageInput,
  FourImageInputs,
  SearchInput,
  MultiDateInput,
} from '@sms/shared'
import { RegisterFormType } from '@features/register/type'
import * as Icon from '@sms/shared/src/icons'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
} from 'react-hook-form'
import { useAutocomplete } from '@features/register/hooks'
import * as S from './style'

interface Props {
  control: Control<RegisterFormType>
  register: UseFormRegister<RegisterFormType>
  errors: FieldErrors<RegisterFormType>
  setValue: UseFormSetValue<RegisterFormType>
  watch: UseFormGetValues<RegisterFormType>
}

const ProjectsInput = ({
  control,
  register,
  errors,
  setValue,
  watch,
}: Props) => {
  const { fields, remove } = useFieldArray({ name: 'projects', control })
  const { onChange, dropdownList } = useAutocomplete()

  return (
    <S.Wrapper>
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
                <ImageInput onChange={() => 'hello'} />
              </S.IconInput>
            </InputColumn>

            <InputColumn comment='미리보기 사진'>
              <FourImageInputs onChange={() => 'hello'} />
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
                startDate={watch(`projects.${idx}.inProgress.start`)}
                endDate={watch(`projects.${idx}.inProgress.end`)}
                setStartDate={(startDate) =>
                  setValue(`projects.${idx}.inProgress.start`, startDate)
                }
                setEndDate={(endDate) =>
                  setValue(`projects.${idx}.inProgress.end`, endDate)
                }
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

      <S.ButtonWrapper>
        <S.AddButton>
          <Icon.SmallPlus type='outline' /> 추가
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ProjectsInput
