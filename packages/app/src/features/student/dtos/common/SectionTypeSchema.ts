import { z } from 'zod'

export const FieldTypeSchema = z.enum([
  'SELECT',
  'BOOLEAN',
  'TEXT',
  'NUMBER',
  'FILE',
])
export type FieldType = z.infer<typeof FieldTypeSchema>
