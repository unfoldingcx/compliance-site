import { useComplianceData } from "@/hooks/useComplianceData";
import { useComplianceStore } from "@/store/complianceStore";
import { useCategories } from "@/hooks/useComplianceData";
import { ComplianceItem } from "@/components/ComplianceItem";
import { Accordion } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WelcomeScreen } from "./WelcomeScreen";

const translations = {
  en_US: {
    error: "Error loading compliance data. Please try again later.",
    noResults: "No compliance items found with the current filters.",
  },
  pt_BR: {
    error:
      "Erro ao carregar dados de compliance. Por favor, tente novamente mais tarde.",
    noResults: "Nenhum item de compliance encontrado com os filtros atuais.",
  },
  fr_FR: {
    error:
      "Erreur lors du chargement des données de conformité. Veuillez réessayer plus tard.",
    noResults: "Aucun élément de conformité trouvé avec les filtres actuels.",
  },
  de_DE: {
    error:
      "Fehler beim Laden der Compliance-Daten. Bitte versuchen Sie es später erneut.",
    noResults: "Keine Compliance-Elemente mit den aktuellen Filtern gefunden.",
  },
  es_ES: {
    error:
      "Error al cargar datos de cumplimiento. Por favor, inténtelo de nuevo más tarde.",
    noResults:
      "No se encontraron elementos de cumplimiento con los filtros actuales.",
  },
};

export function ComplianceList() {
  const { data, isLoading, error } = useComplianceData();
  const { categories } = useCategories();
  const { activeCategory, activeCategoryIndex, searchQuery, language } =
    useComplianceStore();

  const t = translations[language] || translations.en_US;

  // Determine the current category based on either activeCategory directly or via index
  const currentCategory =
    activeCategory ||
    (activeCategoryIndex !== null && categories[activeCategoryIndex]) ||
    null;

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-24 bg-card rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{t.error}</AlertDescription>
      </Alert>
    );
  }

  // Show welcome screen when no category is selected
  if (!currentCategory && !searchQuery) {
    return <WelcomeScreen />;
  }

  // Filter by active category and search query
  const filteredItems = data?.complianceItems.filter((item) => {
    const matchesCategory =
      !currentCategory || item.category === currentCategory;
    const matchesSearch =
      !searchQuery ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (filteredItems?.length === 0) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{t.noResults}</AlertDescription>
      </Alert>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Accordion type="multiple" className="w-full">
        {filteredItems?.map((item, index) => (
          <ComplianceItem key={index} item={item} index={index} />
        ))}
      </Accordion>
    </motion.div>
  );
}
