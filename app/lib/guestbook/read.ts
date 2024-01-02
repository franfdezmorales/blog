import { ERROR_CODE, type ResponseDefault } from "@types";
import { unstable_cache as cache } from "next/cache";
import { sql } from "@vercel/postgres";

interface GuestbookEntry {
    id: string,
    author_email: string,
    author_name: string,
    content: string,
    created_at: number
}

const read = cache(async (): Promise<ResponseDefault<GuestbookEntry[]>> => {

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
                created_at: new Date(row.created_at).getFullYear()
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
}, ['guestbook-entries'], { revalidate: false, tags: ['guestbook-entries'] })

export default read