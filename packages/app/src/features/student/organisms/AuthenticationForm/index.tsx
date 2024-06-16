import { Button, CertificationForm, DownloadList } from '@sms/shared'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'
import { saveAs } from 'file-saver'
import { AuthenticationFormTestData } from '@features/student/data/AuthenticationFormTestData'
import { FormProvider, useForm } from 'react-hook-form'
import AuthenticationField from '@features/student/molecules/AuthenticationField'
import AuthenticationArrayField from '@features/student/molecules/AuthenticationArrayField'
import ResToAuthenticationForm from '@features/student/lib/ResToAuthenticationForm'
import { AuthenticationFormDto } from '@features/student/dtos/form/AuthenticationFormDto'
import * as S from './style'

interface Props {
  data?: AuthenticationFormResDto
}

const AuthenticationForm = ({ data }: Props) => {
  data = AuthenticationFormTestData
  const methods = useForm<AuthenticationFormDto>({
    defaultValues: ResToAuthenticationForm(data),
  })

  const onSubmit = methods.handleSubmit(() => {})

  return (
    <FormProvider {...methods}>
      <S.Wrapper onSubmit={onSubmit}>
        <DownloadList>
          {data?.files.map((file) => (
            <DownloadList.File
              key={file.name}
              filename={file.name}
              onClick={() => saveAs(file.url)}
            />
          ))}
        </DownloadList>

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
          <Button type='submit'>저장</Button>
        </S.Bottom>
      </S.Wrapper>
    </FormProvider>
  )
}

export default AuthenticationForm
