import { headers } from 'next/headers'

const ip = () => {
    const forwardedFor = headers().get('x-forwarded-for')
    if (forwardedFor) return forwardedFor.split(',')[0].trim()

    const realIp = headers().get('x-real-api')
    if (realIp) return realIp.trim()

    return '0.0.0.0'
}

export default ip