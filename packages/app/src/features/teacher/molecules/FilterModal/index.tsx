import { ModalPortal } from '@features/modal/portals'
import FilterHeader from '@features/student/atoms/FilterHeader'
import CheckboxSection from '@features/student/atoms/CheckboxSection'
import { Button, Checkbox } from '@sms/shared'
import { useForm } from 'react-hook-form'
import { AuthenticationStudentType } from '@features/teacher/dtos/req/AuthenticationStudentListReqDto'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useModal } from '@features/modal/hooks'
import { z } from 'zod'

import * as S from './style'

const FilterModal = () => {
  const { query, push } = useRouter()
  const { data } = AuthenticationStudentType.safeParse(query.type)
  const { onClose } = useModal()

  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: { type: data },
    resolver: zodResolver(
      z.object({
        type: z.array(AuthenticationStudentType).optional(),
      })
    ),
  })

  const onSubmit = handleSubmit((data) => {
    push({ query: data })
    onClose()
  })

  return (
    <ModalPortal>
      <S.Wrapper onSubmit={onSubmit}>
        <FilterHeader reset={reset} />

        <S.Content>
          <CheckboxSection isShow title='보기'>
            <Checkbox
              {...register('type')}
              value={AuthenticationStudentType.enum.PENDING_REVIEW}
            >
              제출
            </Checkbox>
            <Checkbox
              {...register('type')}
              value={AuthenticationStudentType.enum.NOT_SUBMITTED}
            >
              미체출
            </Checkbox>
            <Checkbox
              {...register('type')}
              value={AuthenticationStudentType.enum.COMPLETED}
            >
              채점 완료
            </Checkbox>
          </CheckboxSection>
        </S.Content>

        <S.ButtonWrapper>
          <S.ResetButton onClick={() => reset()}>초기화</S.ResetButton>
          <Button type='submit' disabled={isDirty}>
            확인
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </ModalPortal>
  )
}

export default FilterModal
