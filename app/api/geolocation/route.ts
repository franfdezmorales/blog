import { geolocation } from '@vercel/edge'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export function GET(request: Request) {
    const { city, country } = geolocation(request)
    return NextResponse.json({ city, country }, { status: 200 })
}