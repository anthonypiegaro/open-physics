"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { authClient } from "@/lib/auth-client"
import { signInFormSchema } from "@/lib/schemas/signInFormSchema"
import { cn } from "@/lib/utils"
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

import shapeAnimation from "@/public/lottie/shape-animation.json"

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [error, setError] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const router = useRouter()

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
    try {
      await authClient.signIn.email({
        email: values.email,
        password: values.password
      }, {
        onRequest: (ctx) => {
          setIsSubmitting(true)
          lottieRef.current?.play()
        },
        onSuccess: (ctx) => {
          router.push("/dashboard")
        },
        onError: (ctx) => {
          lottieRef.current?.goToAndStop(0)
          setIsSubmitting(false)
          setError(ctx.error.message)
        }
      })
    } catch (error) {
      console.error(error)
      setError("Something went wrong")
    }
  }

  return (
    <Form {...form}>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
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
                <FormLabel className="flex justify-between">
                  password
                  <span>
                  <Link
                    href="#"
                    className="ml-auto text-sm font-normal underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isSubmitting} onClick={form.handleSubmit(onSubmit)} >
            Sign In
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
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  )
}
