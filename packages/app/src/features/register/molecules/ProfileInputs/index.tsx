import { Input, Profile, Select, MultiInput } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MajorList } from '@features/register/data'
import { Control, UseFormRegister } from 'react-hook-form'
import { RegisterFormType } from '@features/register/type'

interface Props {
  register: UseFormRegister<RegisterFormType>
  control: Control<RegisterFormType>
}

const ProfileInputs = ({ register, control }: Props) => {
  return (
    <FormWrapper title='프로필'>
      <InputColumn comment='사진'>
        <Profile error='' />
      </InputColumn>
      <InputColumn comment='자기 소개'>
        <Input {...register('introduce')} placeholder='1줄 자기소개 입력' />
      </InputColumn>
      <InputColumn comment='이메일'>
        <Input {...register('contactEmail')} placeholder='공개 이메일 입력' />
      </InputColumn>
      <InputColumn comment='분야'>
        <Select register={register} options={MajorList} name='major' />
      </InputColumn>
      <InputColumn comment='포트폴리오'>
        <Input {...register('portfolioUrl')} placeholder='https://' />
      </InputColumn>
      <InputColumn comment='세부스택'>
        <MultiInput
          register={register}
          control={control}
          name='techStack'
          placeholder='예시)HTML, CSS, C#'
        />
      </InputColumn>
    </FormWrapper>
  )
}

export default ProfileInputs
