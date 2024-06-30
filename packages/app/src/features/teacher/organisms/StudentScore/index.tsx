import { CertificationForm } from '@sms/shared'
import * as S from './style'

const StudentScore = () => {
  return (
    <S.Wrapper>
      <CertificationForm>
        <CertificationForm.Header>
          <CertificationForm.Title>수상 경력</CertificationForm.Title>
        </CertificationForm.Header>

        <CertificationForm.Field label='교외'>
          <span>hello</span>
        </CertificationForm.Field>

        <CertificationForm.Field label='교내'>
          <span>world</span>
        </CertificationForm.Field>
      </CertificationForm>
    </S.Wrapper>
  )
}

export default StudentScore
