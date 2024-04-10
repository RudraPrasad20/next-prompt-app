import {z} from "zod";

export const messageSchema = z.object({
    content: z.string().min(10, "Content must be at least of 10 char").max(300, "Content must be at least of 300 char"),

})