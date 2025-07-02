export type SignupResponse = {
    message: string,
    data: {
        id: string
        username: string,
        email: string,
        password: string
    }
}

export type LoginResponse = {
    message: string,
    data: {
        token: string
    }
}


export type JwtPayloadBack = {
    id: string,
    exp: number,
    iat: number
}


export type AuthenticateResponse = {
    message: string,
    data: {
        token:  JwtPayloadBack
    }
}   