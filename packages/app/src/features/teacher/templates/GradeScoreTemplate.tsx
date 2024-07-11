import Header from '@features/global/Header'
import StudentScore from '@features/teacher/organisms/StudentScore'
import GradeScoreForm from '@features/teacher/organisms/GradeScoreForm'
import useStudentAuthenticationInfoQuery from '@features/teacher/queries/useStudentAuthenticationInfoQuery'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setMaxFocus } from '@features/teacher/stores/gradeAuthenticationSlice'
import * as S from './style'

const GradeScoreTemplate = () => {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const markingBoardId = Array.isArray(query.id) ? undefined : query.id
  const { data } = useStudentAuthenticationInfoQuery({
    markingBoardId,
  })

  if (data?.content?.length) dispatch(setMaxFocus(data.content.length - 1))

  return (
    <S.Wrapper>
      <Header />

      <S.GradeScoreFormWrapper>
        <S.Title>{data?.title}</S.Title>
        <S.FormWrapper>
          <StudentScore contents={data?.content ?? []} />

          {data && (
            <GradeScoreForm markingBoardId={markingBoardId} data={data} />
          )}
        </S.FormWrapper>
      </S.GradeScoreFormWrapper>
    </S.Wrapper>
  )
}

export default GradeScoreTemplate
