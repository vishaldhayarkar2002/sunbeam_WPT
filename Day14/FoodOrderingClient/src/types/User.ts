export interface UserSignInResponse {
    status: "success" | "error"
    data?: {
        name: string,
        email: string,
        mobile: string,
        token: string,
    }
    error?: any
}