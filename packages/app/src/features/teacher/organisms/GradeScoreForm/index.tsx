import ScoreInput from '@features/teacher/molecules/ScoreInput'
import { Button, Checkbox, Input } from '@sms/shared'
import * as S from './style'

const GradeScoreForm = () => {
  return (
    <S.Wrapper>
      <S.Title>채점 항목</S.Title>
      <S.Description>인증제를 확인하 점수를 매겨주세요</S.Description>
      <S.Hr />

      <ScoreInput>
        <ScoreInput.Header score={70}>수상 경력</ScoreInput.Header>

        <ScoreInput.Content>
          <Input type='number' placeholder='점수 입력' />

          <ScoreInput.SubmitButtons />

          <Checkbox>점수 단일 부여</Checkbox>
        </ScoreInput.Content>
      </ScoreInput>

      <S.Hr />

      <S.Footer>
        <S.Total>합계</S.Total>

        <S.Score>80점</S.Score>
      </S.Footer>

      <Button>제출</Button>
    </S.Wrapper>
  )
}

export default GradeScoreForm
