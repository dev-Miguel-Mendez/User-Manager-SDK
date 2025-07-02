import { User } from "../domains/user.js";
import { LoginRequestBody, SignupRequestBody } from "../types-and-schemas/types/request-types.js";

export interface IUserService {
    register({email, username, password}: SignupRequestBody): Promise<User | undefined>


    login({email, password}: LoginRequestBody): Promise<{token: string} | undefined>

    verifyToken(token: string) : any //¡ CHANGE THIS ANY 
}