export interface ResponseDefault<T> {
    errorCode: ERROR_CODE | null,
    errorMessage: string | null,
    data: T | null
}

export const enum ERROR_CODE {
    NOT_AUTHENTICATED = 401,
    BAD_REQUEST = 400,
    UNKNOWN_ERROR = 500
}