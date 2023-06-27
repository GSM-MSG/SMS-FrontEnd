import * as SVG from '../../assets/svg'
import * as S from './style'

interface Props {
  id: string
  major: string
  name: string
  profileImg?: string
  techStack: string[]
  onClick(id: string): void
  opacity?: number
}

const StudentCard = ({
  id,
  name,
  major,
  techStack,
  profileImg,
  onClick,
  opacity = 1,
}: Props) => {
  return (
    <S.Wrapper style={{ opacity }} onClick={() => onClick(id)}>
      {profileImg ? (
        <S.ProfileImg src={profileImg} />
      ) : (
        <S.ProfileBackground>
          <SVG.Person />
        </S.ProfileBackground>
      )}

      <S.UserInfo>
        <div>
          <S.Name>{name}</S.Name>
          <S.Stack>{major}</S.Stack>
        </div>

        <S.Tags>
          {techStack?.map((stack) => (
            <S.Tag key={stack}>{stack}</S.Tag>
          ))}
        </S.Tags>
      </S.UserInfo>
    </S.Wrapper>
  )
}

export default StudentCard
