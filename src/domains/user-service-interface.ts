import { User } from "../domains/user.js";

export interface IUserService {
    register(email: string, username: string, password: string): Promise<User>

    
    login(email: string, password: string): Promise<{token: string}>

    verifyToken(token: string) : any //¡ CHANGE THIS ANY 
}