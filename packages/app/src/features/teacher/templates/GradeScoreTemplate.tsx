import Header from '@features/global/Header'
import StudentScore from '@features/teacher/organisms/StudentScore'
import GradeScoreForm from '@features/teacher/organisms/GradeScoreForm'
import * as S from './style'

const GradeScoreTemplate = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.GradeScoreFormWrapper>
        <S.Title>변찬우학생 인증제</S.Title>
        <S.FormWrapper>
          <StudentScore />

          <GradeScoreForm />
        </S.FormWrapper>
      </S.GradeScoreFormWrapper>
    </S.Wrapper>
  )
}

export default GradeScoreTemplate
