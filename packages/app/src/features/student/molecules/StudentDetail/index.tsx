import React, { useState } from 'react'
import PrizesDetail from '@features/student/atoms/PrizesDetail'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import ProjectDetail from '@features/student/atoms/ProjectDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
import ProfileSharingModal from '@features/student/molecules/ProfileSharingModal'
import { BlurPortal } from '@features/modal/portals'
import useLoggedInQuery from '@features/auth/queries/useLoggedInQuery'
import { useModal } from '@features/modal/hooks'
import * as S from './style'
import Role from '@/types/Role'

interface Props {
  student: StudentDetail | null
  studentId?: string
}

const StudentDetail = ({ student, studentId }: Props) => {
  const { data } = useLoggedInQuery()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { onClose } = useModal()
  const portfolioUrl =
    student?.portfolioUrl ||
    (student?.portfolioFileUrl ? `/student/${studentId}/portfolio` : null)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <S.Wrapper>
      <ProfileDetail
        major={student?.major}
        name={student?.name}
        grade={student?.grade}
        classNum={student?.classNum}
        number={student?.number}
        techStacks={student?.techStacks}
        introduce={student?.introduce}
        profileImgUrl={student?.profileImgUrl}
        department={student?.department}
      />
      <StudentInfo
        contactEmail={student?.contactEmail}
        gsmAuthenticationScore={student?.gsmAuthenticationScore}
        militaryService={student?.militaryService}
        formOfEmployment={student?.formOfEmployment}
        salary={student?.salary}
        languageCertificates={student?.languageCertificates}
        certificates={student?.certificates}
      />
      <PrizesDetail prizes={student?.prizes} />
      <ProjectDetail projects={student?.projects} />
      <S.PortfolioWrapper>
        {portfolioUrl && (
          <S.PortfolioButton onClick={() => onClose()} href={portfolioUrl}>
            포트폴리오
          </S.PortfolioButton>
        )}
        {data?.isLoggedIn && data.role === Role.ROLE_HOMEROOM && (
          <S.ShareButton onClick={toggleModal}>공유</S.ShareButton>
        )}
      </S.PortfolioWrapper>
      {isModalOpen && (
        <BlurPortal>
          <ProfileSharingModal
            studentId={studentId}
            toggleModal={toggleModal}
          />
        </BlurPortal>
      )}
    </S.Wrapper>
  )
}

export default StudentDetail
