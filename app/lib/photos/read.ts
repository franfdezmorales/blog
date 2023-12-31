import { type CloudfareImage, ERROR_CODE, type ResponseDefault } from '@types'
import { unstable_cache as cache } from 'next/cache'
import { getPlaiceholder } from 'plaiceholder'

interface Photo {
    src: string,
    blurSrc: string,
    height: number,
    width: number
}

const read = cache(async (): Promise<ResponseDefault<Photo[]>> => {

    try {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_IMAGES_ACCOUNT_ID}/images/v2?sort_order=asc`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.CLOUDFARE_IMAGES_BEARER_TOKEN}`
            }
        })

        const { result: { images }, success } = await response.json()

        if (!success) return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: 'Fail to fetch cloudfare',
            data: null
        }

        const photosPromise = images.map(async (image: CloudfareImage) => {
            const { variants, id } = image
            const [src] = variants
            const responseBuffer = await fetch(src).then(res => res.arrayBuffer())
            const imageBuffer = Buffer.from(responseBuffer)
            const { base64, metadata: { height, width } } = await getPlaiceholder(imageBuffer)

            return {
                src: id,
                blurSrc: base64,
                height,
                width
            }
        })

        const photos = await Promise.all(photosPromise)

        return {
            errorCode: null,
            errorMessage: null,
            data: photos
        }
    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}, ['photos'])

export default read