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
  fieldId: z.number(),
  value: z.string(),
  fieldType: FieldTypeSchema,
})
export type Value = z.infer<typeof ValueSchema>

export const FieldSchema = z
  .object({
    setId: z.number(),
    values: z.array(ValueSchema),
  })
  .transform((value) => ({
    ...value,
    isCircle: !!value.values.find((value) => value.fieldType === 'FILE'),
  }))
export type Field = z.infer<typeof FieldSchema>

export const GroupSchema = z.object({
  groupId: z.number(),
  maxScore: z.number(),
  fields: z.array(FieldSchema),
})
export type Group = z.infer<typeof GroupSchema>

export const SectionSchema = z.object({
  sectionId: z.number(),
  sectionName: z.string(),
  maxCount: z.number(),
  groups: z.array(GroupSchema),
})
export type Section = z.infer<typeof SectionSchema>

export const ContentSchema = z.object({
  areaId: z.number(),
  areaTitle: z.string(),
  sections: z.array(SectionSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const StudentAuthenticationInfoResDtoSchema = z.object({
  markingBoardId: z.number(),
  title: z.string(),
  content: z.array(ContentSchema),
})
export type StudentAuthenticationInfoResDto = z.infer<
  typeof StudentAuthenticationInfoResDtoSchema
>
