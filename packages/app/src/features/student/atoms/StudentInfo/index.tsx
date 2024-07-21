import {
  FormOfEmploymentData,
  MilitaryServiceData,
} from '@features/student/data/StudentDetailData'
import * as S from './style'

interface Props {
  contactEmail?: string
  gsmAuthenticationScore?: number
  militaryService?: MilitaryService
  formOfEmployment?: FormOfEmployment
  salary?: number
  regions?: string[]
  languageCertificates?: LanguageCertificates[]
  certificates?: string[]
}

const StudentInfo = ({
  contactEmail,
  gsmAuthenticationScore,
  militaryService,
  formOfEmployment,
  salary,
  regions,
  languageCertificates,
  certificates,
}: Props) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>이메일</S.Title>
        <S.TableValue>{contactEmail}</S.TableValue>
      </S.Wrapper>

      {!!gsmAuthenticationScore && (
        <S.Wrapper>
          <S.Title>세부정보</S.Title>
          <S.RowTable>
            {!!gsmAuthenticationScore && (
              <S.TableColumn>
                <S.TableTitle>인증제점수</S.TableTitle>
                <S.TableValue>{gsmAuthenticationScore}</S.TableValue>
              </S.TableColumn>
            )}

            {!!gsmAuthenticationScore && <S.TableLine />}

            {militaryService && (
              <S.TableColumn>
                <S.TableTitle>병특 희망 여부</S.TableTitle>
                <S.TableValue>
                  {MilitaryServiceData[militaryService]}
                </S.TableValue>
              </S.TableColumn>
            )}

            {militaryService && <S.TableLine />}

            {formOfEmployment && (
              <S.TableColumn>
                <S.TableTitle>희망 고용 형태</S.TableTitle>
                <S.TableValue>
                  {FormOfEmploymentData[formOfEmployment]}
                </S.TableValue>
              </S.TableColumn>
            )}

            {salary !== undefined && (
              <S.TableColumn>
                <S.TableTitle>희망 연봉</S.TableTitle>
                <S.TableValue>
                  {salary <= 0 ? '상관 없음' : `${salary} 만원`}
                </S.TableValue>
              </S.TableColumn>
            )}

            {!!regions?.length && (
              <S.TableColumn>
                <S.TableTitle>근무 희망 지역</S.TableTitle>
                <S.TableValue>{regions?.join(', ')}</S.TableValue>
              </S.TableColumn>
            )}

            {(formOfEmployment !== undefined ||
              salary !== undefined ||
              !!regions?.length) && <S.TableLine />}

            {!!languageCertificates?.length &&
              languageCertificates?.map((i, idx) => (
                <S.TableColumn key={idx}>
                  <S.TableTitle>{i.languageCertificateName}</S.TableTitle>
                  <S.TableValue>{i.score}</S.TableValue>
                </S.TableColumn>
              ))}

            {!!languageCertificates?.length && <S.TableLine />}

            {!!certificates?.length && (
              <S.TableColumn>
                <S.TableTitle>자격증</S.TableTitle>
                <S.TableValue>{certificates?.join(', ')}</S.TableValue>
              </S.TableColumn>
            )}
          </S.RowTable>
        </S.Wrapper>
      )}
    </>
  )
}

export default StudentInfo
