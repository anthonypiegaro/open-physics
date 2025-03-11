import { ChevronUp, User2 } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
      <SidebarFooter>
          <SidebarMenu>
          <SidebarMenuItem>
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
              >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
              </DropdownMenuContent>
              </DropdownMenu>
          </SidebarMenuItem>
          </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}