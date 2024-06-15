import {
  Button,
  CertificationForm,
  DownloadList,
  Input,
  SegmentedControl,
} from '@sms/shared'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'
import { saveAs } from 'file-saver'
import { AuthenticationFormTestData } from '@features/student/data/AuthenticationFormTestData'
import * as S from './style'

interface Props {
  data?: AuthenticationFormResDto
}

const AuthenticationForm = ({ data }: Props) => {
  data = AuthenticationFormTestData
  return (
    <S.Wrapper>
      <DownloadList>
        {data?.files.map((file) => (
          <DownloadList.File
            key={file.name}
            filename={file.name}
            onClick={() => saveAs(file.url)}
          />
        ))}
      </DownloadList>

      {data?.contents.map((content) => (
        <CertificationForm key={content.title}>
          <CertificationForm.Header>
            <CertificationForm.Title>{content.title}</CertificationForm.Title>
          </CertificationForm.Header>

          {content.sections.map((section) => (
            <CertificationForm.Field
              key={section.sectionId}
              label={section.sectionName}
            >
              {section.fields.map((field) => {
                if (field.sectionType === 'BOOLEAN')
                  return (
                    <SegmentedControl
                      key={field.fieldId}
                      text1={field.values?.[0].value ?? ''}
                      text2={field.values?.[1].value ?? ''}
                    />
                  )

                return <Input key={field.fieldId} placeholder={field.example} />
              })}
            </CertificationForm.Field>
          ))}
        </CertificationForm>
      ))}

      <S.Bottom>
        <Button type='submit'>저장</Button>
      </S.Bottom>
    </S.Wrapper>
  )
}

export default AuthenticationForm
