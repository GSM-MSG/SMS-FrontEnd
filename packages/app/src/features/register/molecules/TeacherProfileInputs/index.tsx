import { Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { TeacherRegisterFormType } from '@features/register/type'
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from 'react-hook-form'
import TeacherList from '@features/register/data/TeacherList'
import ClassNumberList from '@features/register/data/ClassNumberList'
import GradeList from '@features/register/data/GradeList'
interface Props {
  register: UseFormRegister<TeacherRegisterFormType>
  errors: FieldErrors<TeacherRegisterFormType>
  control: Control<TeacherRegisterFormType>
  watch: UseFormGetValues<TeacherRegisterFormType>
}

const TeacherProfileInputs = ({ control, register, watch }: Props) => {
  return (
    <FormWrapper title='프로필'>
      <InputColumn comment='직함'>
        <Select
          control={control}
          register={register}
          options={TeacherList}
          name='teacherType'
          value={watch('teacherType')}
        />
      </InputColumn>
      {watch('teacherType') === 'homeroom' ? (
        <>
          <InputColumn comment='학년'>
            <Select
              control={control}
              register={register}
              options={GradeList}
              name='grade'
              value={watch('grade')}
            />
          </InputColumn>
          <InputColumn comment='반'>
            <Select
              control={control}
              register={register}
              options={ClassNumberList}
              name='classNum'
              value={watch('classNum')}
            />
          </InputColumn>
        </>
      ) : null}
    </FormWrapper>
  )
}

export default TeacherProfileInputs
