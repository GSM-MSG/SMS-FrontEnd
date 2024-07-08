import { CertificationForm, DownloadList } from '@sms/shared'
import { Content } from '@features/teacher/dtos/res/StudentAuthenticationInfoResDto'
import { saveAs } from 'file-saver'
import { Fragment } from 'react'
import * as S from './style'

interface Props {
  contents: Content[]
}

const StudentScore = ({ contents }: Props) => {
  return (
    <S.Wrapper>
      {contents?.map((content) => (
        <CertificationForm key={content.areaId}>
          <CertificationForm.Header>
            <CertificationForm.Title>
              {content.areaTitle}
            </CertificationForm.Title>
          </CertificationForm.Header>

          {content.sections?.map((section) => (
            <CertificationForm.Field
              label={section.sectionName}
              key={section.sectionId}
            >
              {section.groups.map((group) => (
                <S.ValueList key={group.groupId} className='hello world'>
                  {group.fields.map((field, fieldIndex) => (
                    <Fragment key={`${field.setId}-${fieldIndex}`}>
                      {field.isCircle ? (
                        <S.FieldValue>
                          {field.values.map((value) => value.value).join(' : ')}
                        </S.FieldValue>
                      ) : (
                        field.values.map((value) =>
                          value.fieldType === 'FILE' ? (
                            <DownloadList.File
                              key={value.fieldId}
                              filename={value.fieldId + ''}
                              onClick={() => saveAs(value.value)}
                            />
                          ) : (
                            <S.FieldValue key={value.fieldId}>
                              {value.value}
                            </S.FieldValue>
                          )
                        )
                      )}
                    </Fragment>
                  ))}
                </S.ValueList>
              ))}
            </CertificationForm.Field>
          ))}
        </CertificationForm>
      ))}
    </S.Wrapper>
  )
}

export default StudentScore
