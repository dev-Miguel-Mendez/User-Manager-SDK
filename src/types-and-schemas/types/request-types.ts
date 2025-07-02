import { z } from "zod"
import { authenticateSchema, loginSchema, signupSchema } from "../zod-schemas/user-schemas.js"

export type SignupRequestBody = z.infer<typeof signupSchema>['body']
export type LoginRequestBody = z.infer<typeof loginSchema>['body']
export type AuthenticateRequestBody = z.infer<typeof authenticateSchema>['body']