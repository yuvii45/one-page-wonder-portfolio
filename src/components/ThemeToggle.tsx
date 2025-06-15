
import { Moon, Sun, Zap } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('synthwave');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 [.synthwave_&]:-rotate-90 [.synthwave_&]:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 [.synthwave_&]:rotate-90 [.synthwave_&]:scale-0" />
      <Zap className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.synthwave_&]:rotate-0 [.synthwave_&]:scale-100" />
    </Button>
  )
}
