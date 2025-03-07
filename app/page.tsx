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
      <main className="flex flex-col justify-center w-full py-20 bg-gradient-to-t from-secondary to-75% md:py-30 lg:py-40">
        <h1 className="flex flex-row justify-center px-3 mb-4 text-3xl font-bold text-center leading-relaxed md:mb-4 md:text-5xl md:px-6 lg:mb-6 lg:text-6xl lg:px-16">
          Open&nbsp;
          <span className="pb-1 block bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 text-transparent bg-clip-text">
            Physics
          </span>
        </h1>
        <p className="self-center max-w-xl px-4 mb-4 font-medium text-center text-primary md:max-w-2xl md:text-lg lg:text-xl">
          An Open-Source Physics Learning Platform, Enhanced by AI for Personalized, In-Depth Education—Completely Free.
          Open Physics makes university-level physics accessible to everyone, offering AI-powered tutoring on specific topics 
          for real-time, personalized feedback. Track your progress throughout the course and master physics at your own 
          pace—all at no cost.
        </p>
      </main>
    </div>
  );
}
