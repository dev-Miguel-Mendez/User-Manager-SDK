
import { IUserService } from "../domains/user-service-interface.js";
import { User } from "../domains/user.js";
import { SignupRequestBody, LoginRequestBody } from "../types-and-schemas/types/request-types.js";
import { HttpProvider } from "./http-provider.js";

export class UserProvider implements IUserService {

    constructor(public HttpProvider: HttpProvider){}

    async register({email, username, password}: SignupRequestBody): Promise<User | undefined> {
        const data = await this.HttpProvider.signup({email, username, password})

        if(!data) return

        const user = new User(data.id, data.email, data.username, data.password)
        return user
    }

    async login({email, password}: LoginRequestBody): Promise<{token: string} | undefined> {
        const data = await this.HttpProvider.login({email, password})
        return data
    }

    async verifyToken(token: string) {
        const data = await this.HttpProvider.authenticate(token)
        return data
    }

}