import { z } from 'zod'
import Role from '@/types/Role'

const RoleSchema = z.enum([Role.ROLE_STUDENT, Role.ROLE_TEACHER])

export const successDto = z.object({
  isLoggedIn: z.literal(true),
  role: RoleSchema,
})

export const failDto = z.object({
  isLoggedIn: z.literal(false),
})

const LoggedInResDto = z.discriminatedUnion('isLoggedIn', [successDto, failDto])

export type LoggedInResType = z.infer<typeof LoggedInResDto>

export default LoggedInResDto
