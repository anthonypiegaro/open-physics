"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { DropdownMenuItem } from "./ui/dropdown-menu"

export default function AppSidebarSignout() {
  const router = useRouter();

  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  }

  return (
    <DropdownMenuItem onClick={onSignOut}>
      <span>Sign out</span>
    </DropdownMenuItem>
  )
}