import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useComplianceStore } from "@/store/complianceStore";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translations = {
  en_US: {
    light: "Light",
    dark: "Dark",
    system: "System",
    theme: "Toggle theme"
  },
  pt_BR: {
    light: "Claro",
    dark: "Escuro",
    system: "Sistema",
    theme: "Alternar tema"
  },
  fr_FR: {
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    theme: "Changer de thème"
  },
  de_DE: {
    light: "Hell",
    dark: "Dunkel",
    system: "System",
    theme: "Thema umschalten"
  },
  es_ES: {
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    theme: "Cambiar tema"
  }
};

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const { language } = useComplianceStore();
  
  const t = translations[language] || translations.en_US;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t.theme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t.dark}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}