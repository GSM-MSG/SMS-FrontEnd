import { z } from 'zod'
import { FieldTypeSchema } from '@features/student/dtos/common/SectionTypeSchema'

export const FieldSchema = z.object({
  fieldId: z.string(),
  fieldType: FieldTypeSchema,
  value: z.string(),
  selectId: z.string(),
})
export type Field = z.infer<typeof FieldSchema>

export const ObjectElementSchema = z.object({
  groupId: z.string(),
  fields: z.array(FieldSchema),
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
