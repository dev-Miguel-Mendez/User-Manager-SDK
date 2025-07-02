import axios, { AxiosError, AxiosInstance } from "axios"
import type { LoginRequestBody, SignupRequestBody } from "../types-and-schemas/types/request-types.js"
import type { AuthenticateResponse, LoginResponse, SignupResponse } from "../types-and-schemas/types/response-types.js"

export class HttpProvider {

    private axiosInstance: AxiosInstance



    constructor(host: string, port: number){
        this.axiosInstance = axios.create({
            baseURL: host + ":" + port

        })
    }

    async signup(signupRequestBody: SignupRequestBody){
        try{
            const response =  await this.axiosInstance.post<SignupResponse>('/api/signup', signupRequestBody)
            const data: SignupResponse['data'] = response.data.data
            return data
            
        }catch(e){
            this.handleRequestError(e)	
        }
    }




    async login(loginRequestBody: LoginRequestBody){
        try{      
            const response = await this.axiosInstance.post<LoginResponse>('/api/login', loginRequestBody) 
            const data: LoginResponse['data'] = response.data.data
            return data
        }catch(e){
            this.handleRequestError(e)	
        }
    }  


    async authenticate(token: string){
        try{
            const response = await this.axiosInstance.post<AuthenticateResponse>('/api/authenticate', {token})
            const data = response.data.data
            return data
        }catch(e){
            this.handleRequestError(e)
        }

    }


    private handleRequestError (e: unknown){


        if(e instanceof AxiosError){
            const status = e.response?.status
            const message = e.response?.data || 'Http Provider failed'
            
            if(status === 500){ //* Handle server errors 
                console.error('HttpProvider detected an internal server error')
            } else {
                console.error('Error in http request')
                if(!status) console.log('No status code provided, is the server running?');
                
            }
            console.error({message})

        }else {
            console.log(e)
            throw new Error('Error from HttProvider:    ' + e)
        }
    }   
}


