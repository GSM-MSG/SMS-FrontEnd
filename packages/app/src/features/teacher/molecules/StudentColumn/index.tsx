import { SVG } from '@sms/shared'
import * as S from './style'

const StudentColumn = () => {
  return (
    <S.Wrapper>
      <S.Profile>
        <S.ProfileBg>
          <SVG.Person />
        </S.ProfileBg>

        <S.Name>이현빈 1304</S.Name>
      </S.Profile>

      <S.Status style={{ color: 'var(--POSITIVE)' }}>제출</S.Status>
    </S.Wrapper>
  )
}

export default StudentColumn
