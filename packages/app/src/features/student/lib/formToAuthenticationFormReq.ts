import {
  AuthenticationFormReqDto,
  Content,
  ObjectElement,
} from '@features/student/dtos/req/AuthenticationFormReqDto'
import { AuthenticationFormDto } from '@features/student/dtos/form/AuthenticationFormDto'

const formToAuthenticationFormReq = (
  form: AuthenticationFormDto
): AuthenticationFormReqDto => {
  const contents = form.contents.reduce((prev, curr) => {
    const sections = curr.sections.map((section) => ({
      sectionId: section.sectionId,
      objects: section.fields.reduce((prev, curr) => {
        const field = curr.map((field) => ({
          fieldId: field.fieldId,
          value: 'value' in field ? field.value : undefined,
          selectId: 'selectId' in field ? field.selectId : undefined,
          fieldType: field.fieldType,
        }))

        prev.push(...field)

        return prev
      }, [] as ObjectElement[]),
    }))

    prev.push(...sections)
    return prev
  }, [] as Content[])

  return {
    contents,
  }
}

export default formToAuthenticationFormReq
