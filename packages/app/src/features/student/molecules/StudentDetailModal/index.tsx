import { BlurPortal } from '@features/modal/portals'
import StudentDetail from '@features/student/molecules/StudentDetail'
import { useModal } from '@features/modal/hooks'
import { SEO } from '@features/global'
import * as Icon from '@sms/shared/src/icons'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useStudentDetailQuery from '@features/student/queries/useStudentDetailQuery'
import * as S from './style'

interface Props {
  studentId: string
}

const StudentDetailModal = ({ studentId }: Props) => {
  const { data, isLoading } = useStudentDetailQuery({ studentId })
  const { onClose } = useModal()

  if (!isLoading && !data) {
    onClose()
    return null
  }

  return (
    <BlurPortal>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <SEO
          title={data?.name.replace('**', '소금')}
          description={data?.introduce}
          image={data?.profileImgUrl}
        />

        <S.ButtonWrapper onClick={onClose}>
          <S.CloseBtn>
            <Icon.XMarkOutline color='white' />
          </S.CloseBtn>
        </S.ButtonWrapper>

        {isLoading ? (
          <StudentDetailSkeleton />
        ) : (
          <StudentDetail
            studentId={studentId}
            student={data as StudentDetail}
          />
        )}
      </S.Wrapper>
    </BlurPortal>
  )
}

export default StudentDetailModal
