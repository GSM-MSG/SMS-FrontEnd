import { BlurPortal } from '@features/modal/portals'
import StudentDetail from '@features/student/molecules/StudentDetail'
import { useModal } from '@features/modal/hooks'
import { SEO } from '@features/global'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import * as Icon from '@sms/shared/src/icons'
import StudentDetailSkeleton from '@features/student/molecules/StudentDetailSkeleton'
import useLoggedIn from '@features/auth/hook/useLoggedIn'
import * as S from './style'

interface Props {
  student: StudentDetail | null
  studentId: string
}

const StudentDetailModal = ({ student, studentId }: Props) => {
  const { data, isLoading } = useStudentDetail({ studentId })
  const { onClose } = useModal()

  const { role } = useLoggedIn({})

  return (
    <BlurPortal>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <SEO
          title={student?.name.replace('**', '소금')}
          description={student?.introduce}
          image={student?.profileImgUrl}
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
            role={role}
            studentId={studentId}
            student={student || data}
          />
        )}
      </S.Wrapper>
    </BlurPortal>
  )
}

export default StudentDetailModal
