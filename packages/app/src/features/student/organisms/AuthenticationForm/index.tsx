import { CertificationForm, DownloadList } from '@sms/shared'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'
import { saveAs } from 'file-saver'
import { AuthenticationFormTestData } from '@features/student/data/AuthenticationFormTestData'
import { FormProvider } from 'react-hook-form'
import AuthenticationField from '@features/student/molecules/AuthenticationField'
import AuthenticationArrayField from '@features/student/molecules/AuthenticationArrayField'
import useAuthenticationForm from '@features/student/hooks/useAuthenticationForm'
import * as S from './style'

interface Props {
  data?: AuthenticationFormResDto
}

const AuthenticationForm = ({ data }: Props) => {
  data = AuthenticationFormTestData
  const { methods, onSubmit } = useAuthenticationForm({ data })

  return (
    <FormProvider {...methods}>
      <S.Wrapper onSubmit={onSubmit}>
        {!!data.files.length && (
          <DownloadList>
            {data?.files.map((file) => (
              <DownloadList.File
                key={file.name}
                filename={file.name}
                onClick={() => saveAs(file.url)}
              />
            ))}
          </DownloadList>
        )}

        {data?.contents.map((content, contentIndex) => (
          <CertificationForm key={content.title}>
            <CertificationForm.Header>
              <CertificationForm.Title>{content.title}</CertificationForm.Title>
            </CertificationForm.Header>

            {content.sections.map((section, sectionIndex) => {
              if (section.maxCount > 1) {
                return (
                  <AuthenticationArrayField
                    key={section.sectionId}
                    section={section}
                    contentIndex={contentIndex}
                    sectionIndex={sectionIndex}
                  />
                )
              }

              return (
                <AuthenticationField
                  key={section.sectionId}
                  section={section}
                  contentIndex={contentIndex}
                  sectionIndex={sectionIndex}
                />
              )
            })}
          </CertificationForm>
        ))}

        <S.Bottom>
          <S.SubmitButton type='submit'>저장</S.SubmitButton>
        </S.Bottom>
      </S.Wrapper>
    </FormProvider>
  )
}

export default AuthenticationForm
