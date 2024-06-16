import { z } from 'zod'
import { FieldTypeSchema } from '@features/student/dtos/SectionTypeSchema'

export const FieldSchema = z.object({
  fieldId: z.string(),
  fieldType: FieldTypeSchema,
  value: z.string().optional(),
  selectId: z.string().optional(),
})
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
