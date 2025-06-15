
import { Sun, Sprout, Waves } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('forest');
    } else if (theme === 'forest') {
      setTheme('ocean');
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
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all [.forest_&]:-rotate-90 [.forest_&]:scale-0 [.ocean_&]:-rotate-90 [.ocean_&]:scale-0" />
      <Sprout className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.forest_&]:rotate-0 [.forest_&]:scale-100" />
      <Waves className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.ocean_&]:rotate-0 [.ocean_&]:scale-100" />
    </Button>
  )
}
