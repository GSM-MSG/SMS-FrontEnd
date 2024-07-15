import { z } from 'zod'
import { AuthenticationStudentType } from '@features/teacher/dtos/req/AuthenticationStudentListReqDto'

export const ContentSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: AuthenticationStudentType,
  studentId: z.string(),
  profileImgUrl: z.string(),
  totalScore: z.number(),
})
export type Content = z.infer<typeof ContentSchema>

export const AuthenticationFormReqDtoSchema = z.object({
  content: z.array(ContentSchema),
  page: z.number(),
  contentSize: z.number(),
  last: z.boolean(),
  totalSize: z.number(),
})
export type AuthenticationFormReqDto = z.infer<
  typeof AuthenticationFormReqDtoSchema
>
