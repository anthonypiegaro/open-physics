"use server"

import { z } from "zod"
import { db } from "@/db/db"
import { users } from "@/db/schema"
import { signUpFormSchema } from "@/lib/schemas/signUpFormSchema"

export const registerUser = async (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values)

    await new Promise(resolve => setTimeout(resolve, 3000))
}
