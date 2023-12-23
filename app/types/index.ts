export interface ResponseDefault<T> {
    errorId: number | null, 
    errorMessage: string | null, 
    data: T | null
}