import { NextRequest, NextResponse } from 'next/server'
import Token from '@lib/Token'
import getRole from '@features/auth/lib/getRole'
import Role from '@/types/Role'

const protectedRoutes = [
  { path: '/mypage', roles: [Role.ROLE_STUDENT] },
  { path: '/register', roles: [Role.ROLE_STUDENT] },
  { path: '/register/teacher', roles: [Role.ROLE_TEACHER] },
  { path: '/gsminfo', roles: [Role.ROLE_STUDENT] },
]

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl

  const route = protectedRoutes.find((route) => route.path === pathname)
  if (!route) return NextResponse.next()

  const accessToken = req.cookies.get(Token.ACCESS_TOKEN)?.value
  if (!accessToken) return NextResponse.redirect('/login')
  const role = getRole(accessToken)
  if (!role) return NextResponse.redirect('/login')

  if (!route.roles.includes(role)) {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
