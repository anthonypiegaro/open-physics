import Link from "next/link"
import Image from "next/image"
import { Atom } from "lucide-react"

import { SignUpForm } from "@/components/sign-up-form"
import prettyLights from "@/public/pretty-lights.jpg"

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Atom className="size-4" />
            </div>
            Open Physics
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={prettyLights}
          alt="Northern Lights display in the night sky"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
