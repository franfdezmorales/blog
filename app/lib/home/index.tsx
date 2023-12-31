import { ERROR_CODE, type ResponseDefault } from '@types'
import { ip } from '@utils'
import { kv } from '@vercel/kv'

interface LastVisit {
    city: string,
    country: string
}

export const getLastVisitAndUpdate = async (): Promise<ResponseDefault<string>> => {

    try {
        const response = await fetch(`http://ip-api.com/json/${ip()}`, { cache: 'no-store' })
        const { city = 'Madrid', country = 'Spain' } = await response.json()

        const lastVisit = await kv.get('lastVisit') as LastVisit
        const stringifiedLastVisit = JSON.stringify({ city, country })
        kv.set('lastVisit', stringifiedLastVisit)

        if (lastVisit) {
            return {
                errorCode: null,
                errorMessage: null,
                data: `${lastVisit.city}, ${lastVisit.country}`
            }
        }

        return {
            errorCode: null,
            errorMessage: null,
            data: `${city}, ${country}`
        }
    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}