import Link from 'next/link'
import * as S from './style'

const NotFound = () => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src='/png/NotFound.png' alt='not found image' />
      </S.ImageWrapper>
      <S.Title>
        이 페이지는 존재하지 않습니다.
        <br />
        하지만 광주소프트웨어 마이스터고 학생들의 재능은 존재합니다.
      </S.Title>
      <S.Body>재능 있는 학생들을 만나보세요!</S.Body>
      <S.ButtonWrapper>
        <Link href='/'>메인 페이지</Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default NotFound
