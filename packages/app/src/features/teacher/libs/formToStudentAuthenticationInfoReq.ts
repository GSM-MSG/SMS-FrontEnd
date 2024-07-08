import { StudentAuthenticationFormDto } from '@features/teacher/dtos/form/StudentAuthenticationFormDto'
import {
  Content,
  StudentAuthenticationInfoReqDtoSchema,
} from '@features/teacher/dtos/req/StudentAuthenticationInfoReqDto'

const formToStudentAuthenticationInfoReq = (
  form: StudentAuthenticationFormDto
): StudentAuthenticationInfoReqDtoSchema => {
  const content = form.content.reduce((prev, curr) => {
    const sections = curr.sections.reduce((prev, curr) => {
      const groups = curr.groups.reduce((prev, curr) => {
        const fields = curr.fields.reduce((prev, curr) => {
          const scores = curr.values.reduce((prev, curr) => {
            prev.push(curr.score ?? 0)
            return prev
          }, [] as number[])

          const values = scores.map((score) => ({
            setId: curr.setId,
            score,
          }))

          return [...prev, ...values]
        }, [] as Content[])

        return [...prev, ...fields]
      }, [] as Content[])

      return [...prev, ...groups]
    }, [] as Content[])

    return [...prev, ...sections]
  }, [] as Content[])

  return {
    content,
  }
}

export default formToStudentAuthenticationInfoReq
