import { ThemeToggle } from "./ThemeToggle";
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from "./ui/button";
import { useComplianceStore } from '@/store/complianceStore';
import { useBranding } from '@/hooks/useBranding';

const translations = {
  en_US: {
    rights: "All rights reserved."
  },
  pt_BR: {
    rights: "Todos os direitos reservados."
  },
  fr_FR: {
    rights: "Tous droits réservés."
  },
  de_DE: {
    rights: "Alle Rechte vorbehalten."
  },
  es_ES: {
    rights: "Todos los derechos reservados."
  }
};

export function Footer() {
  const { language } = useComplianceStore();
  const { branding } = useBranding();
  const t = translations[language] || translations.en_US;

  return (
    <footer className="border-t py-8 mt-8 bg-card/30">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3 mb-3">
            <img 
              src={branding?.logo || "/images/logo_meza.png"} 
              alt={`${branding?.companyName || "Company"} Logo`}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm font-semibold">{branding?.companyName || "Company"}</p>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {branding?.companyName || "Company"}. {t.rights}
          </p>
        </motion.div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter/X</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}