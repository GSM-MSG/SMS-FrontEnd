import { decode } from 'jsonwebtoken'
import { z } from 'zod'
import Role from '@/types/Role'

const RoleSchema = z.enum([
  Role.ROLE_STUDENT,
  Role.ROLE_TEACHER,
  Role.ROLE_DIRECTOR,
  Role.ROLE_HOMEROOM,
  Role.ROLE_PRINCIPAL,
  Role.ROLE_DEPUTY_PRINCIPAL,
])

const getRole = (token: string) => {
  const payload = decode(token, { json: true })

  const result = RoleSchema.safeParse(payload?.ROLE)
  if (!result.success) return

  return result.data
}

export default getRole
