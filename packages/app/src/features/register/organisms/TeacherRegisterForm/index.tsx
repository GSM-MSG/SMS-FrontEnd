import { SMSLogo } from '@sms/shared'
import TeacherProfileInputs from '@features/register/molecules/TeacherProfileInputs'
import { useTeacherRegister } from '@features/register/hooks'
import * as S from './style'

const TeacherRegisterForm = () => {
  const { control, register, onSubmit, errors, watch } = useTeacherRegister()
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.LogoWrapper>
        <SMSLogo />
      </S.LogoWrapper>
      <TeacherProfileInputs
        control={control}
        register={register}
        errors={errors}
        watch={watch}
      />
      <S.ButtonWrapper>
        <S.SubmitBtn type='submit'>확인</S.SubmitBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default TeacherRegisterForm
