import * as S from './style'

const PrizesDetail = () => {
  return (
    <S.Wrapper>
      <S.Title>수상</S.Title>
      {Array(...Array(3)).map((_, idx) => (
        <S.Prize key={idx}>
          <S.PrizeTop>
            <S.PrizeTitle>한국인의 밥상</S.PrizeTitle>
            <S.PrizeDate>2022.06</S.PrizeDate>
          </S.PrizeTop>
          <S.PrizeInfo>KBS</S.PrizeInfo>
        </S.Prize>
      ))}
    </S.Wrapper>
  )
}

export default PrizesDetail
