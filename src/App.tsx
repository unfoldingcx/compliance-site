import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { MobileCategorySelector } from "@/components/MobileCategorySelector";
import { ComplianceList } from "@/components/ComplianceList";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { useComplianceStore } from "@/store/complianceStore";
import { useBranding } from "@/hooks/useBranding";
import { useCategories } from "@/hooks/useComplianceData";
import { AnimatePresence } from "framer-motion";

const translations = {
  en_US: {
    title: "Compliance Center",
    subtitle:
      "Consult information and guidance on policies and compliance procedures at {company}.",
    categoryTitle: "{category}",
    categorySubtitle:
      "Consult information and guidance on {category} at {company}.",
  },
  pt_BR: {
    title: "Central de Compliance",
    subtitle:
      "Consulte informações e orientações sobre políticas e procedimentos de compliance da {company}.",
    categoryTitle: "{category}",
    categorySubtitle:
      "Consulte informações e orientações sobre {category} da {company}.",
  },
  fr_FR: {
    title: "Centre de Conformité",
    subtitle:
      "Consultez les informations et les directives sur les politiques et les procédures de conformité de {company}.",
    categoryTitle: "{category}",
    categorySubtitle:
      "Consultez les informations et les directives sur {category} de {company}.",
  },
  de_DE: {
    title: "Compliance-Center",
    subtitle:
      "Informationen und Richtlinien zu Compliance-Richtlinien und -Verfahren von {company}.",
    categoryTitle: "{category}",
    categorySubtitle:
      "Informationen und Richtlinien zu {category} von {company}.",
  },
  es_ES: {
    title: "Centro de Cumplimiento",
    subtitle:
      "Consulte información y orientación sobre políticas y procedimientos de cumplimiento de {company}.",
    categoryTitle: "{category}",
    categorySubtitle:
      "Consulte información y orientación sobre {category} de {company}.",
  },
};

function App() {
  const { activeCategory, activeCategoryIndex, language } =
    useComplianceStore();
  const { categories } = useCategories();
  const { branding, isLoading } = useBranding();
  const t = translations[language] || translations.en_US;

  const companyName = branding?.companyName || "Meza Tecnologias";

  // Determine the current category based on either activeCategory directly or via index
  const currentCategory =
    activeCategory ||
    (activeCategoryIndex !== null && categories[activeCategoryIndex]) ||
    null;

  const title = currentCategory
    ? t.categoryTitle.replace("{category}", currentCategory)
    : t.title;
  const subtitle = currentCategory
    ? t.categorySubtitle
        .replace("{category}", currentCategory.toLowerCase())
        .replace("{company}", companyName)
    : t.subtitle.replace("{company}", companyName);

  return (
    <>
      <AnimatePresence>{isLoading ? <LoadingScreen /> : null}</AnimatePresence>

      {isLoading ? null : (
        <div className="min-h-screen flex flex-col w-full bg-gradient-to-b from-background to-background/90">
          <Header />

          <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-6 py-8">
            {/* Desktop sidebar - hidden on mobile */}
            <aside className="hidden md:block md:w-80 shrink-0 md:sticky md:top-20 h-fit rounded-xl border bg-card overflow-hidden shadow-sm">
              <CategoryNavigation />
            </aside>

            {/* Mobile category selector - shown only on mobile */}
            <div className="md:hidden w-full">
              <MobileCategorySelector />
            </div>

            <main className="flex-1 flex flex-col gap-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight animate-fade-in">
                  {title}
                </h2>
                <p className="text-muted-foreground">{subtitle}</p>
              </div>

              <ComplianceList />
            </main>
          </div>

          <Footer />
          <Toaster />
        </div>
      )}
    </>
  );
}

export default App;
