import { z } from 'zod'
import { FieldTypeSchema } from '@features/student/dtos/common/SectionTypeSchema'

export const ValueFieldSchema = z.object({
  fieldId: z.string(),
  fieldType: z.enum([
    FieldTypeSchema.enum.TEXT,
    FieldTypeSchema.enum.FILE,
    FieldTypeSchema.enum.NUMBER,
  ]),
  value: z.string().min(1, { message: '값을 입력해주세요' }),
})
export type ValueFieldType = z.infer<typeof ValueFieldSchema>

export const SelectIdFieldSchema = z.object({
  fieldId: z.string(),
  fieldType: z.enum([
    FieldTypeSchema.enum.SELECT,
    FieldTypeSchema.enum.BOOLEAN,
  ]),
  selectId: z.string().min(1, { message: '값을 입력해주세요' }),
})
export type SelectIdField = z.infer<typeof SelectIdFieldSchema>

export const FieldSchema = z.union([ValueFieldSchema, SelectIdFieldSchema])
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
