import * as SVG from '@sms/shared/src/assets/svg'
import * as S from './style'

const ProfileDetail = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <S.Major>FrontEnd</S.Major>

        <S.Name>최형우</S.Name>

        <S.SchoolInfo>3학년 2반 10번 • 소프트웨어 개발과</S.SchoolInfo>

        <S.Tags>
          <S.Tag>Adobe Premiere Pro 2023</S.Tag>
          <S.Tag>Adobe Premiere Pro 2023</S.Tag>
          <S.Tag>Adobe Premiere Pro 2023</S.Tag>
          <S.Tag>Adobe Premiere Pro 2023</S.Tag>
          <S.Tag>Adobe Premiere Pro 2023</S.Tag>
        </S.Tags>

        <S.Introduce>
          <S.IntroduceLabel>자기소개</S.IntroduceLabel>
          왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕왕
        </S.Introduce>
      </S.Left>

      <S.Right>
        <S.TemeporaryImage>
          <SVG.Person />
        </S.TemeporaryImage>
      </S.Right>
    </S.Wrapper>
  )
}

export default ProfileDetail
