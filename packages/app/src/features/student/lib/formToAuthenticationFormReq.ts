import {
  AuthenticationFormReqDto,
  Content,
  Field,
} from '@features/student/dtos/req/AuthenticationFormReqDto'
import { AuthenticationFormDto } from '@features/student/dtos/form/AuthenticationFormDto'

const formToAuthenticationFormReq = (
  form: AuthenticationFormDto
): AuthenticationFormReqDto => {
  const contents = form.contents.reduce<Content[]>((prev, curr) => {
    const sections = curr.sections.map((section) => ({
      sectionId: section.sectionId,

      objects: section.groups.map((group) => ({
        groupId: group.groupId,
        fields: group.fields.reduce((prev, curr) => {
          prev.push(...curr)
          return prev
        }, [] as Field[]),
      })),
    }))

    prev.push(...sections)
    return prev
  }, [] as Content[])

  return {
    contents,
  }
}

export default formToAuthenticationFormReq
