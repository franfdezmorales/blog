/* import { auth } from "@lib/auth"
import { NextResponse } from 'next/server'

export default auth((req) => {

    if (req.auth?.user?.email !== process.env.AUTH_ADMIN_EMAIL) {
        return NextResponse.rewrite(new URL('/login', req.url))
    }
})

export const config = {
    matcher: '/admin',
} */

export default function middleware() { }