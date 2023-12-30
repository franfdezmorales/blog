import { ERROR_CODE, type ResponseDefault } from '@types'
import fs from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

interface Photo {
    src: string,
    blurSrc: string
}

const read = async (): Promise<ResponseDefault<Photo[]>> => {

    try {
        const directory = path.join(process.cwd(), 'public', 'photos')
        const photosURL = await fs.readdir(directory)
        const photosPromise = photosURL.map(async (photoURL) => {
            const file = await fs.readFile(`${directory}/${photoURL}`)
            const { base64 } = await getPlaiceholder(file)

            return {
                src: photoURL,
                blurSrc: base64
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
}

export default read