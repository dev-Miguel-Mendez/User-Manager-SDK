export type SignupResponse = {
    message: string,
    success: boolean
    data: {
        id: string
        username: string,
        email: string,
        password: string
    }
}

export type LoginResponse = {
    message: string,
    success: boolean
    data: {
        token: string
    }
}

export type AuthenticateResponse = {
    message: string,
    success: boolean
    data: {
        token:  JwtPayloadBack
    }
}   

export type JwtPayloadBack = {
    id: string,
    exp: number,
    iat: number
}
