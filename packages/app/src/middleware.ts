import { NextRequest, NextResponse } from 'next/server'
import Token from '@lib/Token'
import getRole from '@features/auth/lib/getRole'
import Role from '@/types/Role'

const notLoggedInRoute = ['/login']

const protectedRoutes = [
  { path: '/mypage', roles: [Role.ROLE_STUDENT] },
  { path: '/register', roles: [Role.ROLE_STUDENT] },
  { path: '/register/teacher', roles: [Role.ROLE_TEACHER] },
  { path: '/gsminfo', roles: [Role.ROLE_STUDENT] },
]

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl
  const accessToken = req.cookies.get(Token.ACCESS_TOKEN)?.value
  const url = req.nextUrl.clone()

  // 로그인이 됐을 때 접근 불가
  if (accessToken && notLoggedInRoute.includes(pathname)) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // 보호되는 pathname인지 검사
  const route = protectedRoutes.find((route) => route.path === pathname)
  if (!route) return NextResponse.next()

  // 보호되는 pathname인데 accessToken이 없음
  const role = getRole(accessToken || '')
  if (!accessToken || !role) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // 로그인은 됐는데 권한이 안 맞을 때
  if (!route.roles.includes(role)) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/mypage', '/register', '/register/teacher', '/gsminfo', '/login'],
}
