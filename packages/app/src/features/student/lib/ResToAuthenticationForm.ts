import {
  AuthenticationFormDto,
  Content,
} from '@features/student/dtos/form/AuthenticationFormDto'
import { AuthenticationFormResDto } from '@features/student/dtos/res/AuthenticationFromResDto'

const ResToAuthenticationForm = (
  data: AuthenticationFormResDto
): AuthenticationFormDto => {
  return {
    contents: data.contents.map<Content>((content) => ({
      sections: content.sections.map((section) => ({
        sectionId: section.sectionId,
        groups: section.groups.map((group) => ({
          groupId: group.groupId,
          fields: [
            group.fields.map((field) => ({
              fieldId: field.fieldId,
              fieldType: field.fieldType,
              value: '',
              selectId: '',
            })),
          ],
        })),
      })),
    })),
  }
}

export default ResToAuthenticationForm
