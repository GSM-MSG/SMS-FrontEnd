import { z } from 'zod'

export const AuthenticationStudentType = z.enum([
  'NOT_SUBMITTED',
  'PENDING_REVIEW',
  'UNDER_REVIEW',
  'COMPLETED',
])

export const AuthenticationStudentListReqDtoSchema = z.object({
  page: z.number(),
  size: z.number(),
  type: AuthenticationStudentType,
})
export type AuthenticationStudentListReqDto = z.infer<
  typeof AuthenticationStudentListReqDtoSchema
>
