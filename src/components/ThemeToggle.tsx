
import { Sprout, Waves, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const themes = ['dark', 'forest', 'ocean'];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const currentTheme = theme || 'dark';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.dark_&]:rotate-0 [.dark_&]:scale-100" />
      <Sprout className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.forest_&]:rotate-0 [.forest_&]:scale-100" />
      <Waves className="absolute h-6 w-6 rotate-90 scale-0 transition-all [.ocean_&]:rotate-0 [.ocean_&]:scale-100" />
    </Button>
  )
}
