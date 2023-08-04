import * as S from './style'

const StudentInfo = () => {
  return (
    <S.Wrapper>
      <S.Title>세부정보</S.Title>
      <S.RowTable>
        <S.TableColumn>
          <S.TableTitle>이메일</S.TableTitle>
          <S.TableValue>awjfo@foiwj.com</S.TableValue>
        </S.TableColumn>

        <S.TableColumn>
          <S.TableTitle>인증제점수</S.TableTitle>
          <S.TableValue>990</S.TableValue>
        </S.TableColumn>

        <S.TableLine />

        <S.TableColumn>
          <S.TableTitle>병특 희망 여부</S.TableTitle>
          <S.TableValue>희망</S.TableValue>
        </S.TableColumn>

        <S.TableLine />

        <S.TableColumn>
          <S.TableTitle>희망 고용 형태</S.TableTitle>
          <S.TableValue>정규직</S.TableValue>
        </S.TableColumn>

        <S.TableColumn>
          <S.TableTitle>희망 연봉</S.TableTitle>
          <S.TableValue>9999 만원</S.TableValue>
        </S.TableColumn>

        <S.TableColumn>
          <S.TableTitle>근무 희망 지역</S.TableTitle>
          <S.TableValue>강진 마량, 서울</S.TableValue>
        </S.TableColumn>

        <S.TableLine />

        <S.TableColumn>
          <S.TableTitle>영어</S.TableTitle>
          <S.TableValue>10점</S.TableValue>
        </S.TableColumn>

        <S.TableLine />

        <S.TableColumn>
          <S.TableTitle>자격증</S.TableTitle>
          <S.TableValue>정보처리기능사</S.TableValue>
        </S.TableColumn>
      </S.RowTable>
    </S.Wrapper>
  )
}

export default StudentInfo
