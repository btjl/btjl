"use client";

import { Github, Linkedin } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { ModeToggle } from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col py-8">
            <header className="container">
              <div className="flex justify-between border-b dark:border-white py-4">
                <a className="flex  space-x-2" href="/">
                  <div className="flex flex-col space-y-1 text-sm leading-none">
                    <h1 className="text-lg font-bold">Brennan</h1>
                    <span>
                      I
                      <code className="relative rounded bg-muted dark:bg-muted-foreground px-[0.3rem] py-[0.2rem] mx-1 font-mono text-sm font-semibold">
                        code
                      </code>
                      for fun. Regularly.
                    </span>
                  </div>
                </a>
                <div className="flex items-center space-x-2 ">
                  <a
                    className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0"
                    href="https://github.com/btjl"
                    target="_blank"
                  >
                    <Github className="h-4 w-4 fill-current" />
                  </a>
                  <a
                    className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0"
                    href="https://www.linkedin.com/in/brennantanjiale/"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <ModeToggle />
                </div>
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
