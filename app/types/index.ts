export interface ResponseDefault<T> {
    errorCode: ERROR_CODE | null,
    errorMessage: string | null,
    data: T | null
}

export const enum ERROR_CODE {
    NOT_AUTHENTICATED = 401,
    BAD_REQUEST = 400,
    UNKNOWN_ERROR = 500,
    NOT_FOUND = 404
}

export interface CloudfareImage {
    filename: string,
    id: string,
    meta: { [key: string]: string },
    requireSignedURLs: boolean,
    uploaded: string,
    variants: string[]
}