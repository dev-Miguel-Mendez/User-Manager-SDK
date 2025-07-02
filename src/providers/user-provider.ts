
import { IUserService } from "../domains/user-service-interface.js";
import { User } from "../domains/user.js";
import { SignupResponse } from "../types-and-schemas/types/response-types.js";
import { HttpProvider } from "./http-provider.js";

export class UserProvider implements IUserService {

    constructor(public HttpProvider: HttpProvider){}

    async register(email: string, username: string, password: string): Promise<User> {
        const response = await this.HttpProvider.signup(email, username, password)
        const {data}: SignupResponse = response.data
        const user = new User(data.id, data.email, data.username, data.password)
        return user
    }
}