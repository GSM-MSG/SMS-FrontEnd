import { z } from 'zod'

export const ContentSchema = z.object({
  setId: z.number(),
  score: z.number(),
})
export type Content = z.infer<typeof ContentSchema>

export const StudentAuthenticationInfoReqDtoSchema = z.object({
  content: z.array(ContentSchema),
})
export type StudentAuthenticationInfoReqDtoSchema = z.infer<
  typeof StudentAuthenticationInfoReqDtoSchema
>
