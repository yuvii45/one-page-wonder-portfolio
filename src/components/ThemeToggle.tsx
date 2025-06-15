
import { Moon, Sun, Sprout } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('forest');
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
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 [.forest_&]:-rotate-90 [.forest_&]:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 [.forest_&]:rotate-90 [.forest_&]:scale-0" />
      <Sprout className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.forest_&]:rotate-0 [.forest_&]:scale-100" />
    </Button>
  )
}
