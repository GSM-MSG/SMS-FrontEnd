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

export const SelectIdFieldSchema = z.object({
  fieldId: z.string(),
  fieldType: z.enum([
    FieldTypeSchema.enum.SELECT,
    FieldTypeSchema.enum.BOOLEAN,
  ]),
  selectId: z.string().min(1, { message: '값을 입력해주세요' }),
})

export const FieldSchema = z.union([ValueFieldSchema, SelectIdFieldSchema])
export type Field = z.infer<typeof FieldSchema>

export const SectionSchema = z.object({
  sectionId: z.string(),
  fields: z.array(z.array(FieldSchema)),
})
export type Section = z.infer<typeof SectionSchema>

export const ContentSchema = z.object({
  sections: z.array(SectionSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const AuthenticationFormDtoSchema = z.object({
  contents: z.array(ContentSchema),
})
export type AuthenticationFormDto = z.infer<typeof AuthenticationFormDtoSchema>
