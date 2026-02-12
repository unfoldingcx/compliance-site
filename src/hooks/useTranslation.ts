import { useComplianceStore, LanguageCode } from '@/store/complianceStore';
import { translations, TranslationKey } from '@/translations';

export function useTranslation(section: TranslationKey) {
  const { language } = useComplianceStore();
  
  const t = (key: string, replacements?: Record<string, string>): string => {
    let translation = translations[language]?.[section]?.[key] as string || 
                      translations.en_US[section][key] as string || 
                      key;
    
    if (replacements) {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        translation = translation.replace(`{${placeholder}}`, value);
      });
    }
    
    return translation;
  };

  return { t };
}