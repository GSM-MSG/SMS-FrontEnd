import PrizesDetail from '@features/student/atoms/PrizesDetail'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import ProjectDetail from '@features/student/atoms/ProjectDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
import * as S from './style'

interface Props {
  student: StudentDetail | null
}

const StudentDetail = ({ student }: Props) => {
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

      {student?.portfolioUrl && (
        <S.PortfolioWrapper>
          <S.PortfolioButton href={student?.portfolioUrl}>
            포트폴리오
          </S.PortfolioButton>
        </S.PortfolioWrapper>
      )}
    </S.Wrapper>
  )
}

export default StudentDetail
