import React, { useState } from 'react'
import PrizesDetail from '@features/student/atoms/PrizesDetail'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import ProjectDetail from '@features/student/atoms/ProjectDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
import ProfileSharingModal from '@features/student/molecules/ProfileSharingModal'
import { BlurPortal } from '@features/modal/portals'
import * as S from './style'

interface Props {
  student: StudentDetail | null
  studentId?: string
  role?: string | undefined
}

const StudentDetail = ({ student, studentId, role }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        {student?.portfolioUrl && (
          <S.PortfolioButton href='/'>포트폴리오</S.PortfolioButton>
        )}
        {role === 'ROLE_TEACHER/ROLE_HOMEROOM' && (
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
