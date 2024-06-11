import { z } from 'zod'

export const FieldTypeSchema = z.enum(['SELECT_VALUE', 'BOOLEAN', 'TEXT'])
export type FieldType = z.infer<typeof FieldTypeSchema>

export const ValueSchema = z.object({
  selectId: z.string(),
  value: z.string(),
})
export type Value = z.infer<typeof ValueSchema>

export const FieldSchema = z.object({
  sectionId: z.string(),
  type: FieldTypeSchema,
  values: z.union([z.array(ValueSchema), z.null()]),
  example: z.string(),
})
export type Field = z.infer<typeof FieldSchema>

export const ItemSchema = z.object({
  section: z.string(),
  scoreDescription: z.string(),
  sectionScore: z.number(),
  maxCount: z.number(),
  fields: z.array(FieldSchema),
})
export type Item = z.infer<typeof ItemSchema>

export const FileSchema = z.object({
  name: z.string(),
  url: z.string(),
})
export type File = z.infer<typeof FileSchema>

export const ContentSchema = z.object({
  title: z.string(),
  files: z.array(FileSchema),
  items: z.array(ItemSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const AuthenticationFormResDtoSchema = z.object({
  content: z.array(ContentSchema),
})
export type AuthenticationFormResDto = z.infer<
  typeof AuthenticationFormResDtoSchema
>
