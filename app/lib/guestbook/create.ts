'use server'
import { auth } from "@lib/auth"
import { ERROR_CODE, type ResponseDefault } from "@types"
import { nanoid } from 'nanoid'
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"

const create = async (formData: FormData): Promise<ResponseDefault<undefined>> => {

    try {
        const session = await auth()
        if (!session || !session.user) return {
            errorCode: ERROR_CODE.NOT_AUTHENTICATED,
            errorMessage: 'User is not authenticated',
            data: null
        }

        const entry = formData.get('entry')?.toString()
        if (!entry || entry === '') return {
            errorCode: ERROR_CODE.BAD_REQUEST,
            errorMessage: 'No content has been provided',
            data: null
        }

        const id = nanoid(25)
        const { email, name } = session.user
        const formattedEntry = entry.trim().slice(0, 100)
        const { rowCount } = await sql`
            INSERT INTO 
            guestbook
            (id, author_email, author_name, content)
            VALUES
            (${id}, ${email}, ${name}, ${formattedEntry})
        `
        if (rowCount === 0) return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: 'Unable to save content',
            data: null
        }

        revalidatePath('/guestbook')

        return {
            errorCode: null,
            errorMessage: null,
            data: undefined
        }

    } catch (err) {
        return {
            errorCode: ERROR_CODE.UNKNOWN_ERROR,
            errorMessage: err as string,
            data: null
        }
    }
}

export default create