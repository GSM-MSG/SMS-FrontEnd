import { AuthenticationFormDto } from '@features/student/dtos/form/AuthenticationFormDto'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'

const ResToAuthenticationForm = (
  data: AuthenticationFormResDto
): AuthenticationFormDto => {
  return {
    contents: data.contents.map((content) => ({
      sections: content.sections.map((section) => ({
        sectionId: section.sectionId,
        fields: [
          section.fields.map((field) => ({
            fieldId: field.fieldId,
            fieldType: field.fieldType,
            value: '',
            selectId: '',
          })),
        ],
      })),
    })),
  }
}

export default ResToAuthenticationForm
