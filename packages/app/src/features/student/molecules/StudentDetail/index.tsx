import {
  DepartmentData,
  FormOfEmploymentData,
  MilitaryServiceData,
} from '@features/student/data/StudentDetailData'
import ModalPortal from '@components/ModalPortal'
import { Button } from '@sms/shared'
import { Xmark } from '@sms/shared/src/icons'
import useModal from '@features/student/hooks/useModal'
import * as Icon from '@sms/shared/src/icons'
import * as SVG from '@sms/shared/src/assets/svg'
import useFileDownloader from '@features/student/hooks/useFileDownloader'
import { useRouter } from 'next/router'
import * as S from './style'

interface Props {
  student: Partial<StudentDetail>
}

const StudentDetail = ({ student }: Props) => {
  const { onClose } = useModal('detail')
  const { onChange } = useFileDownloader()
  const router = useRouter()
  const isExistDetailData =
    student.contactEmail &&
    student.gsmAuthenticationScore &&
    student.militaryService &&
    student.regions &&
    student.militaryService &&
    student.formOfEmployment &&
    student.salary

  return (
    <ModalPortal onClose={onClose}>
      <S.Wrapper>
        <S.CloseButton onClick={onClose}>
          <Xmark />
        </S.CloseButton>
        <S.Content>
          {student.profileImg ? (
            <S.LeftImage src={student.profileImg} alt='profile image' />
          ) : (
            <S.TemeporaryImage>
              <SVG.Person />
            </S.TemeporaryImage>
          )}
          <S.RightContent>
            {student.dreamBookFileUrl && (
              <S.DreamBook
                onClick={() =>
                  onChange(
                    student.dreamBookFileUrl as string,
                    student.name as string
                  )
                }
              >
                <Icon.Book />
              </S.DreamBook>
            )}
            <S.Major>{student.major}</S.Major>
            <S.Name>{student.name}</S.Name>
            {student.grade &&
              student.classNum &&
              student.number &&
              student.department && (
                <S.SchoolInfo>
                  {student.grade}학년 {student.classNum}반 {student.number}번 •{' '}
                  {DepartmentData[student.department]}
                </S.SchoolInfo>
              )}
            {student.techStack && (
              <S.Tags>
                {student.techStack.map((stack, idx) => (
                  <S.Tag key={idx}>{stack}</S.Tag>
                ))}
              </S.Tags>
            )}
            {student.introduce && (
              <S.Introduce>
                <S.IntroduceLabel>자기소개</S.IntroduceLabel>
                {student.introduce}
              </S.Introduce>
            )}

            {isExistDetailData && (
              <S.RowTable>
                <S.TableColumn>
                  <S.TableTitle>이메일</S.TableTitle>
                  <S.TableValue>{student.contactEmail}</S.TableValue>
                </S.TableColumn>

                <S.TableColumn>
                  <S.TableTitle>인증제점수</S.TableTitle>
                  <S.TableValue>{student.gsmAuthenticationScore}</S.TableValue>
                </S.TableColumn>

                <S.TableLine />

                <S.TableColumn>
                  <S.TableTitle>병특 희망 여부</S.TableTitle>
                  <S.TableValue>
                    {
                      MilitaryServiceData[
                        student.militaryService as MilitaryService
                      ]
                    }
                  </S.TableValue>
                </S.TableColumn>

                <S.TableLine />

                <S.TableColumn>
                  <S.TableTitle>희망 고용 형태</S.TableTitle>
                  <S.TableValue>
                    {
                      FormOfEmploymentData[
                        student.formOfEmployment as FormOfEmployment
                      ]
                    }
                  </S.TableValue>
                </S.TableColumn>

                <S.TableColumn>
                  <S.TableTitle>희망 연봉</S.TableTitle>
                  <S.TableValue>{student.salary} 만원</S.TableValue>
                </S.TableColumn>

                <S.TableColumn>
                  <S.TableTitle>근무 희망 지역</S.TableTitle>
                  <S.TableValue>{student.regions?.join(', ')}</S.TableValue>
                </S.TableColumn>

                <S.TableLine />

                {student.languageCertificates?.map(
                  ({ languageCertificateName, score }, idx) => (
                    <S.TableColumn key={idx}>
                      <S.TableTitle>{languageCertificateName}</S.TableTitle>
                      <S.TableValue>{score}</S.TableValue>
                    </S.TableColumn>
                  )
                )}

                {student.languageCertificates?.length ? <S.TableLine /> : null}

                <S.TableColumn>
                  <S.TableTitle>자격증</S.TableTitle>
                  <S.TableValue>
                    {student.certificates?.join(', ')}
                  </S.TableValue>
                </S.TableColumn>
              </S.RowTable>
            )}
            {student.portfolioUrl && (
              <Button
                onClick={() => router.push(student.portfolioUrl as string)}
              >
                포트폴리오
              </Button>
            )}
          </S.RightContent>
        </S.Content>
      </S.Wrapper>
    </ModalPortal>
  )
}

export default StudentDetail
