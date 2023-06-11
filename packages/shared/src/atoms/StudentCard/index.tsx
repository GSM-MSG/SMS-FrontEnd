import * as SVG from '../../assets/svg'
import * as S from './style'

interface Props {
  id: string
  major: string
  name: string
  profileImgUrl?: string
  techStack: string[]
  onClick(id: string): void
  opacity?: number
}

const StudentCard = ({
  id,
  name,
  major,
  techStack,
  profileImgUrl,
  onClick,
  opacity = 1,
}: Props) => {
  return (
    <S.Wrapper style={{ opacity }} onClick={() => onClick(id)}>
      {profileImgUrl ? (
        <S.ProfileImg src={profileImgUrl} />
      ) : (
        <S.ProfileBackground>
          <SVG.Person />
        </S.ProfileBackground>
      )}

      <S.Name>{name}</S.Name>
      <S.Stack>{major}</S.Stack>

      <S.Tags>
        {techStack?.map((stack) => (
          <S.Tag key={stack}>{stack}</S.Tag>
        ))}
        <S.Tag>...</S.Tag>
      </S.Tags>
    </S.Wrapper>
  )
}

export default StudentCard
