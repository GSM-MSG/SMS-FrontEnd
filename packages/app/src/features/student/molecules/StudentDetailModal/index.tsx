import { BlurPortal } from '@features/modal/portals'
import StudentDetail from '@features/student/molecules/StudentDetail'
import { useModal } from '@features/modal/hooks'
import { SEO } from '@features/global'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

interface Props {
  student: StudentDetail | null
  studentId: string
}

const StudentDetailModal = ({ student, studentId }: Props) => {
  const { data } = useStudentDetail({ studentId })
  const { onClose } = useModal()

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
            <Icon.XmarkOutline color='white' />
          </S.CloseBtn>
        </S.ButtonWrapper>

        <StudentDetail student={student || data} />
      </S.Wrapper>
    </BlurPortal>
  )
}

export default StudentDetailModal
