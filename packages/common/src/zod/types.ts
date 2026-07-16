import {z} from "zod"


export const signUpUserSchema = z.object({
    email: z.email(),
    username: z.string().min(5).max(20),
    password: z.string().min(5).max(20)
    .regex(/[A-Z]/, { message: "Password must contain at least 1 UPPER-CASE Character" })
    .regex(/[a-z]/, { message: "Password must contain at least 1 lower-case Character" })
    .regex(/[0-9]/, { message: "Password must contain atleast 1 Number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must conatin at least 1 Special Character(&,@,#,..)" })
})

export const signInUserSchema = z.object({
    email: z.email(),
    password: z.string().min(5).max(20)
    .regex(/[A-Z]/, { message: "Password must contain at least 1 UPPER-CASE Character" })
    .regex(/[a-z]/, { message: "Password must contain at least 1 lower-case Character" })
    .regex(/[0-9]/, { message: "Password must contain atleast 1 Number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must conatin at least 1 Special Character(&,@,#,..)" })
})

