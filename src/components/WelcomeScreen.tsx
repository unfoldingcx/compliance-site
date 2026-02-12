import { motion } from 'framer-motion';
import { BookOpen, FileCheck, ScrollText, HandHelping } from 'lucide-react';
import { useComplianceStore } from '@/store/complianceStore';
import { useBranding } from '@/hooks/useBranding';

const translations = {
  en_US: {
    welcome: "Welcome to the Compliance Center",
    description: "Our compliance center contains policies, procedures, and guidelines that help {company} operate with integrity and in compliance with all applicable laws and regulations.",
    selectCategory: "Select a category on the left to start exploring our compliance resources.",
    policiesTitle: "Policies and Procedures",
    policiesDesc: "Explore our detailed policies and procedures that ensure regulatory compliance and business ethics.",
    regulationsTitle: "Regulatory Requirements",
    regulationsDesc: "Learn about applicable regulatory requirements and how our company ensures ongoing compliance.",
    documentationTitle: "Documentation",
    documentationDesc: "Access important documents and templates that help keep our company in compliance.",
    supportTitle: "Support and Resources",
    supportDesc: "Find out how to get help and additional resources related to compliance."
  },
  pt_BR: {
    welcome: "Bem-vindo à Central de Compliance",
    description: "Nossa central de compliance contém políticas, procedimentos e diretrizes que ajudam a {company} a operar com integridade e em conformidade com todas as leis e regulamentos aplicáveis.",
    selectCategory: "Selecione uma categoria ao lado para começar a explorar nossos recursos de compliance.",
    policiesTitle: "Políticas e Procedimentos",
    policiesDesc: "Explore nossas políticas e procedimentos detalhados que garantem conformidade regulatória e ética empresarial.",
    regulationsTitle: "Requisitos Regulatórios",
    regulationsDesc: "Conheça as exigências regulatórias aplicáveis e como nossa empresa garante a conformidade contínua.",
    documentationTitle: "Documentação",
    documentationDesc: "Acesse documentos importantes e templates que ajudam a manter nossa empresa em conformidade.",
    supportTitle: "Suporte e Recursos",
    supportDesc: "Saiba como obter ajuda e recursos adicionais relacionados à conformidade."
  },
  fr_FR: {
    welcome: "Bienvenue au Centre de Conformité",
    description: "Notre centre de conformité contient des politiques, des procédures et des lignes directrices qui aident {company} à fonctionner avec intégrité et en conformité avec toutes les lois et réglementations applicables.",
    selectCategory: "Sélectionnez une catégorie sur la gauche pour commencer à explorer nos ressources de conformité.",
    policiesTitle: "Politiques et Procédures",
    policiesDesc: "Explorez nos politiques et procédures détaillées qui garantissent la conformité réglementaire et l'éthique des affaires.",
    regulationsTitle: "Exigences Réglementaires",
    regulationsDesc: "Découvrez les exigences réglementaires applicables et comment notre entreprise assure une conformité continue.",
    documentationTitle: "Documentation",
    documentationDesc: "Accédez à des documents importants et à des modèles qui aident à maintenir notre entreprise en conformité.",
    supportTitle: "Support et Ressources",
    supportDesc: "Découvrez comment obtenir de l'aide et des ressources supplémentaires liées à la conformité."
  },
  de_DE: {
    welcome: "Willkommen im Compliance-Center",
    description: "Unser Compliance-Center enthält Richtlinien, Verfahren und Leitlinien, die {company} dabei helfen, mit Integrität und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften zu arbeiten.",
    selectCategory: "Wählen Sie links eine Kategorie aus, um mit der Erkundung unserer Compliance-Ressourcen zu beginnen.",
    policiesTitle: "Richtlinien und Verfahren",
    policiesDesc: "Entdecken Sie unsere detaillierten Richtlinien und Verfahren, die die Einhaltung von Vorschriften und Geschäftsethik gewährleisten.",
    regulationsTitle: "Regulatorische Anforderungen",
    regulationsDesc: "Erfahren Sie mehr über die geltenden regulatorischen Anforderungen und wie unser Unternehmen die kontinuierliche Einhaltung sicherstellt.",
    documentationTitle: "Dokumentation",
    documentationDesc: "Greifen Sie auf wichtige Dokumente und Vorlagen zu, die dazu beitragen, dass unser Unternehmen die Vorschriften einhält.",
    supportTitle: "Unterstützung und Ressourcen",
    supportDesc: "Erfahren Sie, wie Sie Hilfe und zusätzliche Ressourcen im Zusammenhang mit Compliance erhalten können."
  },
  es_ES: {
    welcome: "Bienvenido al Centro de Cumplimiento",
    description: "Nuestro centro de cumplimiento contiene políticas, procedimientos y directrices que ayudan a {company} a operar con integridad y en cumplimiento de todas las leyes y regulaciones aplicables.",
    selectCategory: "Seleccione una categoría a la izquierda para comenzar a explorar nuestros recursos de cumplimiento.",
    policiesTitle: "Políticas y Procedimientos",
    policiesDesc: "Explore nuestras políticas y procedimientos detallados que garantizan el cumplimiento normativo y la ética empresarial.",
    regulationsTitle: "Requisitos Regulatorios",
    regulationsDesc: "Conozca los requisitos regulatorios aplicables y cómo nuestra empresa garantiza el cumplimiento continuo.",
    documentationTitle: "Documentación",
    documentationDesc: "Acceda a documentos y plantillas importantes que ayudan a mantener nuestra empresa en cumplimiento.",
    supportTitle: "Soporte y Recursos",
    supportDesc: "Descubra cómo obtener ayuda y recursos adicionales relacionados con el cumplimiento."
  }
};

export function WelcomeScreen() {
  const { language } = useComplianceStore();
  const { branding } = useBranding();
  const t = translations[language] || translations.en_US;

  // Replace company name in description
  const description = t.description.replace('{company}', branding?.companyName || 'Meza Tecnologias');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-xl bg-gradient-to-br from-card to-background border shadow-sm">
        <div className="h-20 w-20 flex items-center justify-center mb-6">
          <img 
            src={branding?.logo || "/images/logo_meza.png"}
            alt={`${branding?.companyName || "Company"} Logo`}
            className="h-20 w-auto object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4">{t.welcome}</h3>
        <p className="text-muted-foreground max-w-2xl mb-6">
          {description}
        </p>
        <p className="text-sm text-muted-foreground">
          {t.selectCategory}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-6 rounded-lg border bg-card flex items-start gap-4 transition-all hover:shadow-md"
        >
          <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium mb-2">{t.policiesTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {t.policiesDesc}
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-6 rounded-lg border bg-card flex items-start gap-4 transition-all hover:shadow-md"
        >
          <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
            <FileCheck className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h3 className="font-medium mb-2">{t.regulationsTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {t.regulationsDesc}
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-6 rounded-lg border bg-card flex items-start gap-4 transition-all hover:shadow-md"
        >
          <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
            <ScrollText className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-medium mb-2">{t.documentationTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {t.documentationDesc}
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-6 rounded-lg border bg-card flex items-start gap-4 transition-all hover:shadow-md"
        >
          <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <HandHelping className="h-5 w-5 text-purple-500" />
          </div>
          <div>
            <h3 className="font-medium mb-2">{t.supportTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {t.supportDesc}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}