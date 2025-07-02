export type SignupResponse = {
    message: string,
    data: {
        id: string
        username: string,
        email: string,
        password: string
    }
}