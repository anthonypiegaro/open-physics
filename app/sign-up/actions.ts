"use server"

import bcrypt from "bcryptjs"
import { z } from "zod"
import { db } from "@/db/db"
import { users } from "@/db/schema"
import { signUpFormSchema } from "@/lib/schemas/signUpFormSchema"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

export const registerUser = async (values: z.infer<typeof signUpFormSchema>) => {
    const email = values.email.toLowerCase();

    const [user] = await db.select().from(users).where(eq(users.email, email));

    if (user) {
        return {
            success: false,
            error: "User with email already exists"
        }
    }

    try {
        const hashedPassword = await bcrypt.hash(values.password, 10)

        await db.insert(users).values({
            email: email,
            password: hashedPassword
        })

    } catch (error) {
        console.log("An error occured:", error);

        return {
            success: false,
            error: "Server Error. Please try again later"
        }
    }

    redirect("/sign-in");
}
