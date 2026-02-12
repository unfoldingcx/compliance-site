import { Search } from 'lucide-react';
import { useComplianceStore } from '@/store/complianceStore';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useBranding } from '@/hooks/useBranding';

const translations = {
  en_US: {
    title: "Compliance Center",
    searchPlaceholder: "Search compliance..."
  },
  pt_BR: {
    title: "Central de Compliance",
    searchPlaceholder: "Buscar em compliance..."
  },
  fr_FR: {
    title: "Centre de Conformité",
    searchPlaceholder: "Rechercher dans la conformité..."
  },
  de_DE: {
    title: "Compliance-Center",
    searchPlaceholder: "Compliance durchsuchen..."
  },
  es_ES: {
    title: "Centro de Cumplimiento",
    searchPlaceholder: "Buscar en cumplimiento..."
  }
};

export function Header() {
  const { setSearchQuery, language } = useComplianceStore();
  const { branding } = useBranding();
  const t = translations[language] || translations.en_US;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex h-16 items-center justify-between">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center justify-center">
            <img 
              src={branding?.logo || "/images/logo_meza.png"}
              alt={`${branding?.companyName || "Company"} Logo`}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{branding?.shortName || "Company"}</h1>
            <p className="text-xs text-muted-foreground">{t.title}</p>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative w-full max-w-sm hidden sm:block"
          >
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 bg-card/50 ring-offset-background focus-visible:ring-ring border-muted rounded-full transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
          
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <LanguageSelector />
          </motion.div>
        </div>
      </div>
    </header>
  );
}