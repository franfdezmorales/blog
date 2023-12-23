'use server'
import { auth } from "@lib/auth"
import { type ResponseDefault } from "@types"
import { sql } from "@vercel/postgres"

/* TODO */
const create = async (formData: FormData): Promise<ResponseDefault<any>> => {

    const session = await auth()

    if (!session) return {
        errorId: 401, 
        errorMessage: 'User not authenticated', 
        data: null
    }


    
    
    return {
        errorId: null, 
        errorMessage: null,
        data: 'hola'
    }
}

export default create