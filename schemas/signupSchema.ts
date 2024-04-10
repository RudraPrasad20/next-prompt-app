import {z} from "zod";

export const userValidation = z
.string()
.min (2, "Username must be atleast 2 characters")
.max (10, "Username must be atmax 10 characters")
.regex (/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: userValidation,
    email: z.string().email({message: "invalid email"}),
    password: z.string().min(6, {message: "password nust be at least 6 characters"})

})