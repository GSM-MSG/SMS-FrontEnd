import ScoreInput from '@features/teacher/molecules/ScoreInput'
import { Button, Input } from '@sms/shared'
import { StudentAuthenticationInfoResDto } from '@features/teacher/dtos/res/StudentAuthenticationInfoResDto'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  StudentAuthenticationFormDto,
  StudentAuthenticationFormDtoSchema,
} from '@features/teacher/dtos/form/StudentAuthenticationFormDto'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store'
import {
  nextFocus,
  prevFocus,
} from '@features/teacher/stores/gradeAuthenticationSlice'
import useGradeAuthenticationInfoMutation from '@features/teacher/queries/useGradeAuthenticationInfoMutation'
import formToStudentAuthenticationInfoReq from '@features/teacher/libs/formToStudentAuthenticationInfoReq'
import { useRouter } from 'next/router'
import useAuthenticationStudentListMutation from '@features/teacher/queries/useAuthenticationStudentListMutation'
import * as S from './style'

interface Props {
  data?: StudentAuthenticationInfoResDto
  markingBoardId?: string
}

const GradeScoreForm = ({ data, markingBoardId }: Props) => {
  const router = useRouter()
  const mutateStudentList = useAuthenticationStudentListMutation()
  const { mutate } = useGradeAuthenticationInfoMutation()
  const { handleSubmit, register, watch } =
    useForm<StudentAuthenticationFormDto>({
      defaultValues: data,
      resolver: zodResolver(StudentAuthenticationFormDtoSchema),
    })

  const onSubmit = handleSubmit((data) => {
    if (!markingBoardId) return
    mutate({
      id: markingBoardId,
      form: formToStudentAuthenticationInfoReq(data),
    })
    mutateStudentList()
    router.back()
  })

  const focus = useSelector(
    (state: RootState) => state.gradeAuthentication.focus
  )
  const dispatch = useDispatch()

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>채점 항목</S.Title>
      <S.Description>인증제를 확인하 점수를 매겨주세요</S.Description>
      <S.Hr />

      <S.ScoreContent>
        {data?.content.map((content, contentIndex) => (
          <ScoreInput key={content.areaId} isHidden={focus !== contentIndex}>
            <ScoreInput.Header
              score={watch(`content.${contentIndex}`).sections.reduce(
                (prev, curr) => {
                  return (prev += curr.groups.reduce((prev, curr) => {
                    return (prev += curr.fields.reduce((prev, curr) => {
                      return (prev += curr.score || 0)
                    }, 0))
                  }, 0))
                },
                0
              )}
            >
              {content.areaTitle}
            </ScoreInput.Header>
            {content.sections.map((section, sectionIndex) =>
              section.groups.map((group, groupIndex) =>
                group.fields.map((field, fieldIndex) => (
                  <ScoreInput.Content key={`${field.setId}-${fieldIndex}`}>
                    <Input
                      type='number'
                      placeholder='점수 입력'
                      {...register(
                        `content.${contentIndex}.sections.${sectionIndex}.groups.${groupIndex}.fields.${fieldIndex}.score`,
                        {
                          valueAsNumber: true,
                          max: group.maxScore,
                        }
                      )}
                    />
                  </ScoreInput.Content>
                ))
              )
            )}
            <ScoreInput.SubmitButtons
              onNext={() => dispatch(nextFocus())}
              onPrev={() => dispatch(prevFocus())}
            />
          </ScoreInput>
        ))}
      </S.ScoreContent>

      <S.Hr />

      <S.Footer>
        <S.Total>합계</S.Total>

        <S.Score>
          {watch().content.reduce((prev, curr) => {
            return (prev += curr?.sections.reduce((prev, curr) => {
              return (prev += curr.groups.reduce((prev, curr) => {
                return (prev += curr.fields.reduce((prev, curr) => {
                  return (prev += curr.score || 0)
                }, 0))
              }, 0))
            }, 0))
          }, 0)}
          점
        </S.Score>
      </S.Footer>

      <Button type='submit'>제출</Button>
    </S.Wrapper>
  )
}

export default GradeScoreForm
