import z from 'zod'

export const AuthenticationVerifyResDtoSchema = z.object({
  name: z.string(),
  score: z.number(),
  grader: z.string(),
  markingBoardType: z.enum([
    'NOT_SUBMITTED',
    'PENDING_REVIEW',
    'UNDER_REVIEW',
    'COMPLETED',
  ]),
})
export type AuthenticationVerifyResDto = z.infer<
  typeof AuthenticationVerifyResDtoSchema
>
