import axios, { AxiosInstance } from "axios"
import { SignupRequestBody } from "../types-and-schemas/types/request-types.js"
import { SignupResponse } from "../types-and-schemas/types/response-types.js"

export class HttpProvider {

    private axios: AxiosInstance

    constructor(private readonly host: string, private readonly port: number, private readonly sdkKey: string){
        this.axios = axios.create({
            baseURL: host + ":" + port

        })
    }

    async signup(email: string, username: string, password: string){

        const requestBody: SignupRequestBody = {email, username, password}

        return await this.axios.post<SignupResponse>('/api/signup', requestBody)
    }

    getAllUsers(){

    }

}