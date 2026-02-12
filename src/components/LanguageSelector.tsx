import { Check, Globe } from 'lucide-react';
import { useComplianceStore, LanguageCode } from '@/store/complianceStore';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en_US', name: 'English', flag: '🇺🇸' },
  { code: 'pt_BR', name: 'Português', flag: '🇧🇷' },
  { code: 'fr_FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de_DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es_ES', name: 'Español', flag: '🇪🇸' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useComplianceStore();

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage.flag} {currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as LanguageCode)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              language === lang.code && "font-medium"
            )}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}