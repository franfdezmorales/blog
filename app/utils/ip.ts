import { headers } from 'next/headers'

const ip = async () => {

    const readOnlyHeaders = await headers()

    const forwardedFor = readOnlyHeaders.get('x-forwarded-for')
    if (forwardedFor) return forwardedFor.split(',')[0].trim()

    const realIp = readOnlyHeaders.get('x-real-api')
    if (realIp) return realIp.trim()

    return '0.0.0.0'
}

export default ip