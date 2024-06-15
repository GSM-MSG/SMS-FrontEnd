import { z } from 'zod'

export const SectionTypeSchema = z.enum([
  'SELECT_VALUE',
  'BOOLEAN',
  'TEXT',
  'NUMBER',
  'FILE',
])
export type SectionType = z.infer<typeof SectionTypeSchema>

export const ValueSchema = z.object({
  selectId: z.string(),
  value: z.string(),
})
export type Value = z.infer<typeof ValueSchema>

export const FileSchema = z.object({
  name: z.string(),
  url: z.string(),
})
export type File = z.infer<typeof FileSchema>

export const FieldSchema = z.object({
  fieldId: z.string(),
  sectionType: SectionTypeSchema,
  scoreDescription: z.string(),
  values: z.array(ValueSchema).nullable(),
  example: z.string(),
})
export type Field = z.infer<typeof FieldSchema>

export const SectionSchema = z.object({
  sectionId: z.string(),
  sectionName: z.string(),
  maxCount: z.number(),
  fields: z.array(FieldSchema),
})
export type Section = z.infer<typeof SectionSchema>

export const ContentSchema = z.object({
  title: z.string(),
  sections: z.array(SectionSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const AuthenticationFormResDtoSchema = z.object({
  files: z.array(FileSchema),
  contents: z.array(ContentSchema),
})
export type AuthenticationFormResDto = z.infer<
  typeof AuthenticationFormResDtoSchema
>
