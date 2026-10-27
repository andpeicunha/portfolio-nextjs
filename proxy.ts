import { NextResponse, type NextRequest } from 'next/server'

import { isLocale } from './app/[lang]/content'

export function proxy(request: NextRequest) {
	const firstSegment = request.nextUrl.pathname.split('/')[1]

	if (isLocale(firstSegment)) return NextResponse.next()

	request.nextUrl.pathname = `/en${request.nextUrl.pathname}`
	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
}
