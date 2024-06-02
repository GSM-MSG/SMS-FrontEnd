import { decode } from 'jsonwebtoken'
import { z } from 'zod'
import Role from '@/types/Role'

const RoleSchema = z.enum([Role.ROLE_STUDENT, Role.ROLE_TEACHER])

const getRole = (token: string) => {
  const payload = decode(token, { json: true })

  const result = RoleSchema.safeParse(payload?.ROLE)
  if (!result.success) return

  return result.data
}

export default getRole
