import { LanguageCode } from '@/store/complianceStore';

export type TranslationKey = 'common' | 'app' | 'categories' | 'welcome' | 'errors' | 'footer' | 'header';

export type Translations = {
  [key in TranslationKey]: Record<string, string | Record<string, string>>;
};

// Common translations used across multiple components
export const translations: Record<LanguageCode, Translations> = {
  en_US: {
    common: {
      title: "Compliance Center",
      subtitle: "Consult information and guidance on policies and compliance procedures at Meza Tecnologias.",
      search: "Search compliance...",
      loading: "Loading...",
      noResults: "No results found.",
    },
    app: {
      title: "Compliance Center",
      subtitle: "Consult information and guidance on policies and compliance procedures at Meza Tecnologias.",
      categoryTitle: "{category}",
      categorySubtitle: "Consult information and guidance on {category} at Meza Tecnologias."
    },
    categories: {
      title: "Categories"
    },
    welcome: {
      title: "Welcome to the Compliance Center",
      description: "Our compliance center contains policies, procedures, and guidelines that help Meza Tecnologias operate with integrity and in compliance with all applicable laws and regulations.",
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
    errors: {
      loadFailed: "Error loading compliance data. Please try again later.",
      noResults: "No compliance items found with the current filters."
    },
    footer: {
      rights: "All rights reserved."
    },
    header: {
      title: "Meza Tecnologias",
      subtitle: "Compliance Center",
      searchPlaceholder: "Search compliance..."
    }
  },
  pt_BR: {
    common: {
      title: "Central de Compliance",
      subtitle: "Consulte informações e orientações sobre políticas e procedimentos de compliance da Meza Tecnologias.",
      search: "Buscar em compliance...",
      loading: "Carregando...",
      noResults: "Nenhum resultado encontrado.",
    },
    app: {
      title: "Central de Compliance",
      subtitle: "Consulte informações e orientações sobre políticas e procedimentos de compliance da Meza Tecnologias.",
      categoryTitle: "{category}",
      categorySubtitle: "Consulte informações e orientações sobre {category} da Meza Tecnologias."
    },
    categories: {
      title: "Categorias"
    },
    welcome: {
      title: "Bem-vindo à Central de Compliance",
      description: "Nossa central de compliance contém políticas, procedimentos e diretrizes que ajudam a Meza Tecnologias a operar com integridade e em conformidade com todas as leis e regulamentos aplicáveis.",
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
    errors: {
      loadFailed: "Erro ao carregar dados de compliance. Por favor, tente novamente mais tarde.",
      noResults: "Nenhum item de compliance encontrado com os filtros atuais."
    },
    footer: {
      rights: "Todos os direitos reservados."
    },
    header: {
      title: "Meza Tecnologias",
      subtitle: "Central de Compliance",
      searchPlaceholder: "Buscar em compliance..."
    }
  },
  fr_FR: {
    common: {
      title: "Centre de Conformité",
      subtitle: "Consultez les informations et les directives sur les politiques et les procédures de conformité de Meza Tecnologias.",
      search: "Rechercher dans la conformité...",
      loading: "Chargement...",
      noResults: "Aucun résultat trouvé.",
    },
    app: {
      title: "Centre de Conformité",
      subtitle: "Consultez les informations et les directives sur les politiques et les procédures de conformité de Meza Tecnologias.",
      categoryTitle: "{category}",
      categorySubtitle: "Consultez les informations et les directives sur {category} de Meza Tecnologias."
    },
    categories: {
      title: "Catégories"
    },
    welcome: {
      title: "Bienvenue au Centre de Conformité",
      description: "Notre centre de conformité contient des politiques, des procédures et des lignes directrices qui aident Meza Tecnologias à fonctionner avec intégrité et en conformité avec toutes les lois et réglementations applicables.",
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
    errors: {
      loadFailed: "Erreur lors du chargement des données de conformité. Veuillez réessayer plus tard.",
      noResults: "Aucun élément de conformité trouvé avec les filtres actuels."
    },
    footer: {
      rights: "Tous droits réservés."
    },
    header: {
      title: "Meza Tecnologias",
      subtitle: "Centre de Conformité",
      searchPlaceholder: "Rechercher dans la conformité..."
    }
  },
  de_DE: {
    common: {
      title: "Compliance-Center",
      subtitle: "Informationen und Richtlinien zu Compliance-Richtlinien und -Verfahren von Meza Tecnologias.",
      search: "Compliance durchsuchen...",
      loading: "Wird geladen...",
      noResults: "Keine Ergebnisse gefunden.",
    },
    app: {
      title: "Compliance-Center",
      subtitle: "Informationen und Richtlinien zu Compliance-Richtlinien und -Verfahren von Meza Tecnologias.",
      categoryTitle: "{category}",
      categorySubtitle: "Informationen und Richtlinien zu {category} von Meza Tecnologias."
    },
    categories: {
      title: "Kategorien"
    },
    welcome: {
      title: "Willkommen im Compliance-Center",
      description: "Unser Compliance-Center enthält Richtlinien, Verfahren und Leitlinien, die Meza Tecnologias dabei helfen, mit Integrität und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften zu arbeiten.",
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
    errors: {
      loadFailed: "Fehler beim Laden der Compliance-Daten. Bitte versuchen Sie es später erneut.",
      noResults: "Keine Compliance-Elemente mit den aktuellen Filtern gefunden."
    },
    footer: {
      rights: "Alle Rechte vorbehalten."
    },
    header: {
      title: "Meza Tecnologias",
      subtitle: "Compliance-Center",
      searchPlaceholder: "Compliance durchsuchen..."
    }
  },
  es_ES: {
    common: {
      title: "Centro de Cumplimiento",
      subtitle: "Consulte información y orientación sobre políticas y procedimientos de cumplimiento de Meza Tecnologias.",
      search: "Buscar en cumplimiento...",
      loading: "Cargando...",
      noResults: "No se encontraron resultados.",
    },
    app: {
      title: "Centro de Cumplimiento",
      subtitle: "Consulte información y orientación sobre políticas y procedimientos de cumplimiento de Meza Tecnologias.",
      categoryTitle: "{category}",
      categorySubtitle: "Consulte información y orientación sobre {category} de Meza Tecnologias."
    },
    categories: {
      title: "Categorías"
    },
    welcome: {
      title: "Bienvenido al Centro de Cumplimiento",
      description: "Nuestro centro de cumplimiento contiene políticas, procedimientos y directrices que ayudan a Meza Tecnologias a operar con integridad y en cumplimiento de todas las leyes y regulaciones aplicables.",
      selectCategory: "Seleccione una categoría a la izquierda para comenzar a explorar nuestros recursos de cumplimiento.",
      policiesTitle: "Políticas y Procedimientos",
      policiesDesc: "Explore nuestras políticas y procedimientos detallados que garantizan el cumplimiento normativo y la ética empresarial.",
      regulationsTitle: "Requisitos Regulatorios",
      regulationsDesc: "Conozca los requisitos regulatorios aplicables y cómo nuestra empresa garantiza el cumplimiento continuo.",
      documentationTitle: "Documentación",
      documentationDesc: "Acceda a documentos y plantillas importantes que ayudan a mantener nuestra empresa en cumplimiento.",
      supportTitle: "Soporte y Recursos",
      supportDesc: "Descubra cómo obtener ayuda y recursos adicionales relacionados con el cumplimiento."
    },
    errors: {
      loadFailed: "Error al cargar datos de cumplimiento. Por favor, inténtelo de nuevo más tarde.",
      noResults: "No se encontraron elementos de cumplimiento con los filtros actuales."
    },
    footer: {
      rights: "Todos los derechos reservados."
    },
    header: {
      title: "Meza Tecnologias",
      subtitle: "Centro de Cumplimiento",
      searchPlaceholder: "Buscar en cumplimiento..."
    }
  }
};

export const getTranslation = (
  language: LanguageCode,
  section: TranslationKey,
  key: string
): string => {
  const sectionTranslations = translations[language]?.[section] || translations.en_US[section];
  return (sectionTranslations[key] as string) || key;
};