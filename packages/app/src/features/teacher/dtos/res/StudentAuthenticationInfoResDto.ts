import { z } from 'zod'

export const FieldTypeSchema = z.enum([
  'SELECT',
  'BOOLEAN',
  'TEXT',
  'NUMBER',
  'FILE',
])
export type FieldType = z.infer<typeof FieldTypeSchema>

export const ValueSchema = z.object({
  fieldId: z.string(),
  value: z.string(),
  fieldType: FieldTypeSchema,
})
export type Value = z.infer<typeof ValueSchema>

export const FieldSchema = z.object({
  setId: z.string(),
  values: z.array(ValueSchema),
})
export type Field = z.infer<typeof FieldSchema>

export const GroupSchema = z.object({
  groupId: z.string(),
  maxScore: z.number(),
  fields: z.array(FieldSchema),
})
export type Group = z.infer<typeof GroupSchema>

export const SectionSchema = z.object({
  sectionId: z.string(),
  sectionName: z.string(),
  maxCount: z.number(),
  groups: z.array(GroupSchema),
})
export type Section = z.infer<typeof SectionSchema>

export const ContentSchema = z.object({
  areaId: z.string(),
  areaTitle: z.string(),
  sections: z.array(SectionSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const StudentAuthenticationInfoResDtoSchema = z.object({
  markingBoardId: z.string(),
  title: z.string(),
  content: z.array(ContentSchema),
})
export type StudentAuthenticationInfoResDto = z.infer<
  typeof StudentAuthenticationInfoResDtoSchema
>
