import { SEO } from '@features/global'
import { useModal } from '@features/modal/hooks'
import PrizesDetail from '@features/student/atoms/PrizesDetail'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import ProjectDetail from '@features/student/atoms/ProjectDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
import useStudentDetail from '@features/student/hooks/useStudentDetail'
import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

interface Props {
  studentId: string
  isCloseBtn?: boolean
}

const StudentDetail = ({ studentId, isCloseBtn }: Props) => {
  const { onClose } = useModal()
  const { data } = useStudentDetail(studentId)

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
      <SEO
        title={data?.name}
        description={data?.introduce}
        image={data?.profileImg}
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
        <PrizesDetail prizes={data?.prizes} />
        <ProjectDetail projects={data?.projects} />

        {data?.portfolioUrl && (
          <S.PortfolioWrapper>
            <S.PortfolioButton href={data?.portfolioUrl}>
              포트폴리오
            </S.PortfolioButton>
          </S.PortfolioWrapper>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default StudentDetail
