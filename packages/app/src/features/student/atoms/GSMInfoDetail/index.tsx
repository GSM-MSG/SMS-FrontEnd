import * as S from './style'

interface Props {
  activities?: ActivityType[]
}

const GSMInfoDetail = ({ activities }: Props) => {
  if (!activities?.length) return null

  return (
    <S.Wrapper>
      <S.Title>인증제</S.Title>
      {activities.map((prize, idx) => (
        <S.Prize key={idx}>
          <S.PrizeTop>
            <S.PrizeTitle>{prize.name}</S.PrizeTitle>
            <S.PrizeDate>{prize.previewImage}</S.PrizeDate>
          </S.PrizeTop>
          <S.PrizeInfo>{prize.myActivity}</S.PrizeInfo>
        </S.Prize>
      ))}
    </S.Wrapper>
  )
}

export default GSMInfoDetail
