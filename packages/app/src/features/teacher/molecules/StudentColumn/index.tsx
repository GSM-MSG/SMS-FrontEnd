import { SVG } from '@sms/shared'
import { Content } from '@features/teacher/dtos/res/AuthenticationStudentListResDto'
import { AuthenticationStudentType } from '@features/teacher/dtos/req/AuthenticationStudentListReqDto'
import * as S from './style'

interface Props {
  student: Content
}

const StatusValue = {
  [AuthenticationStudentType.enum.COMPLETED]: {
    value: '채점 완료',
    color: 'var(--P2)',
  },
  [AuthenticationStudentType.enum.UNDER_REVIEW]: {
    value: '채점 중',
    color: 'var(--POSITIVE)',
  },
  [AuthenticationStudentType.enum.NOT_SUBMITTED]: {
    value: '미제출',
    color: 'var(--N40)',
  },
  [AuthenticationStudentType.enum.PENDING_REVIEW]: {
    value: '채점 전',
    color: 'var(--POSITIVE)',
  },
} as const

const StudentColumn = ({ student }: Props) => {
  return (
    <S.Wrapper
      href={
        student.type === 'UNDER_REVIEW' ? `/teacher/student/${student.id}` : '#'
      }
    >
      <S.Profile>
        {student.profileImgUrl ? (
          <S.ProfileImage
            src={student.profileImgUrl}
            alt='student profile image'
            width={48}
            height={48}
          />
        ) : (
          <S.ProfileBg>
            <SVG.Person />
          </S.ProfileBg>
        )}

        <S.Name>{student.title}</S.Name>
      </S.Profile>

      <S.Status style={{ color: StatusValue[student.type].color }}>
        {StatusValue[student.type].value === '채점 완료'
          ? `${student.totalScore}점`
          : StatusValue[student.type].value}
      </S.Status>
    </S.Wrapper>
  )
}

export default StudentColumn
