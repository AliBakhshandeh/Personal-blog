// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    // Check if the request is for the root path
    if (pathname === '/') {
        // Redirect to /en
        const url = req.nextUrl.clone()
        url.pathname = '/en'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

// Configure the matcher to apply the middleware to all routes
export const config = {
    matcher: ['/', '/((?!api|_next|.*\\..*).*)'],
}