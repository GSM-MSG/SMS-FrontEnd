import { z } from 'zod'

export const FieldSchema = z.object({
  setId: z.string(),
  score: z.number().optional(),
})
export type Field = z.infer<typeof FieldSchema>

export const GroupSchema = z.object({
  fields: z.array(FieldSchema),
})
export type Group = z.infer<typeof GroupSchema>

export const SectionSchema = z.object({
  groups: z.array(GroupSchema),
})
export type Section = z.infer<typeof SectionSchema>

export const ContentSchema = z.object({
  sections: z.array(SectionSchema),
})
export type Content = z.infer<typeof ContentSchema>

export const StudentAuthenticationFormDtoSchema = z.object({
  content: z.array(ContentSchema),
})
export type StudentAuthenticationFormDto = z.infer<
  typeof StudentAuthenticationFormDtoSchema
>
