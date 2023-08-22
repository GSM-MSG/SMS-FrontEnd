import { useModal } from '@features/modal/hooks'
import { BlurPortal } from '@features/modal/portals'
import PrizesDetail from '@features/student/atoms/PrizesDetail'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import ProjectDetail from '@features/student/atoms/ProjectDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

interface Props {
  studentId: string
}

const StudentDetailModal = ({ studentId }: Props) => {
  const { data } = useStudentDetail(studentId)
  const { onClose } = useModal()

  console.log(data)

  return (
    <BlurPortal>
      <S.Wrapper>
        <S.ButtonWrapper onClick={onClose}>
          <S.CloseBtn onClick={onClose}>
            <Icon.XmarkOutline color='white' />
          </S.CloseBtn>
        </S.ButtonWrapper>

        <S.Content>
          <ProfileDetail
            major={data?.major}
            name={data?.name}
            grade={data?.grade}
            classNum={data?.classNum}
            number={data?.number}
            techStack={data?.techStack}
            introduce={data?.introduce}
            profileImg={data?.profileImg}
          />
          <StudentInfo
            contactEmail={data?.contactEmail}
            gsmAuthenticationScore={data?.gsmAuthenticationScore}
            militaryService={data?.militaryService}
            formOfEmployment={data?.formOfEmployment}
            salary={data?.salary}
            languageCertificates={data?.languageCertificates}
            certificates={data?.certificates}
          />
          <PrizesDetail />
          <ProjectDetail />
        </S.Content>
      </S.Wrapper>
    </BlurPortal>
  )
}

export default StudentDetailModal
