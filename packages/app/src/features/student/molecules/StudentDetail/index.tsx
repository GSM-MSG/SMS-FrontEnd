import { SEO } from '@features/global'
import { useModal } from '@features/modal/hooks'
import PrizesDetail from '@features/student/atoms/PrizesDetail'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import ProjectDetail from '@features/student/atoms/ProjectDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

type Props =
  | {
      studentId: string
      isCloseBtn?: boolean
      student: null
    }
  | {
      studentId: null
      isCloseBtn?: boolean
      student: StudentDetail
    }

const StudentDetail = ({ studentId, isCloseBtn, student }: Props) => {
  const { onClose } = useModal()
  const { data } = useStudentDetail(studentId)

  const studentData = studentId ? data : student

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
      <SEO
        title={studentData?.name}
        description={studentData?.introduce}
        image={studentData?.profileImg}
      />

      {isCloseBtn && (
        <S.ButtonWrapper onClick={onClose}>
          <S.CloseBtn>
            <Icon.XmarkOutline color='white' />
          </S.CloseBtn>
        </S.ButtonWrapper>
      )}

      <S.Content>
        <ProfileDetail
          major={studentData?.major}
          name={studentData?.name}
          grade={studentData?.grade}
          classNum={studentData?.classNum}
          number={studentData?.number}
          techStack={studentData?.techStack}
          introduce={studentData?.introduce}
          profileImg={studentData?.profileImg}
        />
        <StudentInfo
          contactEmail={studentData?.contactEmail}
          gsmAuthenticationScore={studentData?.gsmAuthenticationScore}
          militaryService={studentData?.militaryService}
          formOfEmployment={studentData?.formOfEmployment}
          salary={studentData?.salary}
          languageCertificates={studentData?.languageCertificates}
          certificates={studentData?.certificates}
        />
        <PrizesDetail prizes={studentData?.prizes} />
        <ProjectDetail projects={studentData?.projects} />

        {studentData?.portfolioUrl && (
          <S.PortfolioWrapper>
            <S.PortfolioButton href={studentData?.portfolioUrl}>
              포트폴리오
            </S.PortfolioButton>
          </S.PortfolioWrapper>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default StudentDetail
