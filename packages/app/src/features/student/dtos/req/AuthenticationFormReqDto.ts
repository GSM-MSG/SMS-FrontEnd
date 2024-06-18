import { z } from 'zod'
import { FieldTypeSchema } from '@features/student/dtos/common/SectionTypeSchema'

export const ObjectElementSchema = z.object({
  fieldId: z.string(),
  fieldType: FieldTypeSchema,
  value: z.string().optional(),
  selectId: z.string().optional(),
})
export type ObjectElement = z.infer<typeof ObjectElementSchema>

export const ContentSchema = z.object({
  sectionId: z.string(),
  objects: z.array(ObjectElementSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const AuthenticationFormReqDtoSchema = z.object({
  contents: z.array(ContentSchema),
})
export type AuthenticationFormReqDto = z.infer<
  typeof AuthenticationFormReqDtoSchema
>
