"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Button className="h-7 w-7 p-0" variant="ghost" size="icon">
        <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Toggle>
  );
}
