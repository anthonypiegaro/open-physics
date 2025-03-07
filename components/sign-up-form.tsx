"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { signUpFormSchema } from "@/lib/schemas/signUpFormSchema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { registerUser } from "@/app/sign-up/actions"
import shapeAnimation from "@/public/lottie/shape-animation.json"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    setIsSubmitting(true)
    lottieRef.current?.play()

    await registerUser(values)
      .then((data) => {

      })
      .catch((error) => {
        console.log("An error occured:", error.message)
      })

    setIsSubmitting(false)
    lottieRef.current?.goToAndStop(0)
  }

  return (
    <Form {...form}>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Register your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to register your account
          </p>
        </div>
        <div className="grid gap-6">
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="name@provider.com" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>
            Sign Up
            <Lottie 
              lottieRef={lottieRef}
              animationData={shapeAnimation} 
              style={{ width: "5%", height: "100%" }} 
              loop={true} 
              autoplay={false}
            />
          </Button>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  )
}
