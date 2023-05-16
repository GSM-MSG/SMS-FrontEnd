import { Input, Profile, Select } from '@sms/shared'
import { InputColumn, FormWrapper } from '@features/register/atoms'
import { MajorList } from '@features/register/data'

const ProfileInputs = () => {
  return (
    <FormWrapper title='프로필'>
      <InputColumn comment='사진'>
        <Profile error='' />
      </InputColumn>
      <InputColumn comment='자기 소개'>
        <Input placeholder='1줄 자기소개 입력' />
      </InputColumn>
      <InputColumn comment='이메일'>
        <Input placeholder='공개 이메일 입력' />
      </InputColumn>
      <InputColumn comment='분야'>
        <Select register={() => {}} options={MajorList} name='major' />
      </InputColumn>
      <InputColumn comment='포트폴리오'>
        <Input placeholder='https://' />
      </InputColumn>
      <InputColumn comment='세부스택'>
        <Input placeholder='예시)HTML, CSS, C#' />
      </InputColumn>
    </FormWrapper>
  )
}

export default ProfileInputs
