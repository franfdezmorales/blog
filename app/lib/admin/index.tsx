"use server"
import { ERROR_CODE, type ResponseDefault, type CloudfareImage, } from "@types"
import { sql } from "@vercel/postgres"
import { unstable_cache as cache, revalidateTag } from "next/cache"
import { getPlaiceholder } from 'plaiceholder'

interface GuestbookAdminEntry {
    id: string,
    author_email: string,
    author_name: string,
    content: string,
    created_at: string
}

export const getGuestbookEntries = cache(async (): Promise<ResponseDefault<GuestbookAdminEntry[]>> => {

    try {
        const { rows } = await sql`
            SELECT
            *
            FROM
            guestbook
            ORDER BY 
            created_at DESC
        `
        const formattedRows = rows.map((row) => (
            {
                id: String(row.id),
                author_email: String(row.author_email),
                author_name: String(row.author_name),
                content: String(row.content),
                created_at: row.created_at
            }))

        return {
            errorCode: null,
            errorMessage: null,
            data: formattedRows
        }

    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}, ['admin-guestbook'], { revalidate: 1, tags: ['guestbook-entries'] })

export const deleteGuestbookEntry = async (id: string): Promise<ResponseDefault<boolean>> => {

    try {
        const { rowCount } = await sql`
            DELETE
            FROM 
            guestbook
            WHERE
            id
            =
            ${id}
        `
        return {
            errorCode: null,
            errorMessage: null,
            data: rowCount > 0
        }

    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}

interface AdminPhoto {
    name: string,
    src: string,
    blurSrc: string,
    height: number,
    width: number
}

export const getPhotos = cache(async (): Promise<ResponseDefault<AdminPhoto[]>> => {

    try {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_IMAGES_ACCOUNT_ID}/images/v2?sort_order=asc`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.CLOUDFARE_IMAGES_BEARER_TOKEN}`
            },
        })

        const { result: { images }, success } = await response.json()

        if (!success) return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: 'Fail to fetch cloudfare',
            data: null
        }

        const photosPromise = images.map(async (image: CloudfareImage) => {
            const { variants, id, filename } = image
            const [src] = variants
            const responseBuffer = await fetch(src).then(res => res.arrayBuffer())
            const imageBuffer = Buffer.from(responseBuffer)
            const { base64, metadata: { height, width } } = await getPlaiceholder(imageBuffer)

            return {
                name: filename,
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
}, ['admin-photos'], { revalidate: 1, tags: ['photos'] })

export const deletePhoto = async (id: string): Promise<ResponseDefault<boolean>> => {

    try {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_IMAGES_ACCOUNT_ID}/images/v1/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${process.env.CLOUDFARE_IMAGES_BEARER_TOKEN}`
            },
        })

        const { success } = await response.json()

        return {
            errorCode: null,
            errorMessage: null,
            data: success
        }

    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}

export const uploadPhotos = async (formData: FormData): Promise<ResponseDefault<boolean>> => {

    try {

        const uploadImagesPromise = Array.from(formData.values()).map(async file => {
            const uploadFormData = new FormData()
            const image = file as File
            uploadFormData.append('file', image)
            const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_IMAGES_ACCOUNT_ID}/images/v1`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.CLOUDFARE_IMAGES_BEARER_TOKEN}`
                },
                body: uploadFormData
            })
            return response.json()
        })

        const uploadImages = await Promise.all(uploadImagesPromise)
        const success = uploadImages.every((uploadImage) => uploadImage.success)

        if (success) revalidateTag('photos')

        return {
            errorCode: null,
            errorMessage: null,
            data: success
        }

    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }

}