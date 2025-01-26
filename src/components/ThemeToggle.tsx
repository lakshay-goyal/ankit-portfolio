import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-50 rounded-full hover:scale-110 transition-all duration-300 
                 bg-portfolio-primary dark:bg-portfolio-accent text-white shadow-lg
                 hover:shadow-xl hover:bg-portfolio-accent dark:hover:bg-portfolio-primary
                 border-2 border-white/20 backdrop-blur-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 animate-scaleIn" />
      ) : (
        <Moon className="h-5 w-5 animate-scaleIn" />
      )}
    </Button>
  );
};