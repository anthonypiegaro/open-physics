import Link from "next/link";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex bg-background">
      <nav className="fixed w-full top-0 left-0 z-50 flex flex-row justify-center bg-transparent backdrop-blur-md lg:justify-end lg:px-12 lg:py-5">
        <div>
          <ThemeToggleButton />
        </div>
        <div className="flex">
          <Button variant="link" asChild>
            <Link href="#">Features</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Sign Up</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Sign In</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
