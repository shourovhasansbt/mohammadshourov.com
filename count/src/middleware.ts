import { NextResponse } from 'next/server'
import { auth } from './auth'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const session = await auth()
  const { pathname } = req.nextUrl

  const isAuthPage = pathname === '/login' || pathname === '/register'
  const isDashboard = pathname.startsWith('/dashboard')
  const isHistory = pathname.startsWith('/history')
  const isAdmin = pathname.startsWith('/admin')
  const isApi = pathname.startsWith('/api')

  if (!session && (isDashboard || isHistory || isAdmin)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (isAdmin && session?.user?.role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/history/:path*',
    '/admin/:path*',
    '/login',
    '/register',
  ],
}
