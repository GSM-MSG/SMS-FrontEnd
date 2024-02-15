import * as S from './style'

interface Props {
  activities?: ActivityType[]
}

const GSMInfoDetail = ({ activities }: Props) => {
  if (!activities?.length) return null

  return (
    <S.Wrapper>
      <S.Title>인증제</S.Title>
      {activities.map((activity, idx) => (
        <S.Activity key={idx}>
          <S.ActivityTop>
            <S.ActivityTitle>{activity.title}</S.ActivityTitle>
          </S.ActivityTop>
          <S.ActivityInfo>{activity.content}</S.ActivityInfo>
        </S.Activity>
      ))}
    </S.Wrapper>
  )
}

export default GSMInfoDetail
