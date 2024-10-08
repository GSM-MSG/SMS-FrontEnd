import { z } from 'zod'

export const AuthenticationStudentType = z.enum([
  'NOT_SUBMITTED',
  'PENDING_REVIEW',
  'UNDER_REVIEW',
  'COMPLETED',
])
export type AuthenticationStudentType = z.infer<
  typeof AuthenticationStudentType
>

export const AuthenticationStudentListReqDtoSchema = z.object({
  page: z.number(),
  size: z.number(),
  type: AuthenticationStudentType.optional(),
})
export type AuthenticationStudentListReqDto = z.infer<
  typeof AuthenticationStudentListReqDtoSchema
>
