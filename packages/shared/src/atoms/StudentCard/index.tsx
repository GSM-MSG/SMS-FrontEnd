import * as SVG from '../../assets/svg'
import * as S from './style'

const StudentCard = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ProfileBackground>
          <SVG.Person />
        </S.ProfileBackground>

        <S.Name>최형우</S.Name>
        <S.Stack>iOS Dev</S.Stack>

        <S.Tags>
          <S.Tag>Figma</S.Tag>
          <S.Tag>Adobe Photoshop</S.Tag>
          <S.Tag>Adobe Illustrator</S.Tag>
          <S.Tag>...</S.Tag>
        </S.Tags>
      </S.Content>
    </S.Wrapper>
  )
}

export default StudentCard
