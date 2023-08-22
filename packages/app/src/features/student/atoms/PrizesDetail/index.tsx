import * as S from './style'

interface Props {
  prizes?: PrizeType[]
}

const PrizesDetail = ({ prizes }: Props) => {
  if (!prizes?.length) return null

  return (
    <S.Wrapper>
      <S.Title>수상</S.Title>
      {prizes.map((prize, idx) => (
        <S.Prize key={idx}>
          <S.PrizeTop>
            <S.PrizeTitle>{prize.name}</S.PrizeTitle>
            <S.PrizeDate>{prize.date}</S.PrizeDate>
          </S.PrizeTop>
          <S.PrizeInfo>{prize.type}</S.PrizeInfo>
        </S.Prize>
      ))}
    </S.Wrapper>
  )
}

export default PrizesDetail
