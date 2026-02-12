import { useCategories } from '@/hooks/useComplianceData';
import { useComplianceStore } from '@/store/complianceStore';
import { useBranding } from '@/hooks/useBranding';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { useMemo } from 'react';
import { categoryIcons } from '@/constants/categoryIcons';

const translations = {
  en_US: {
    categories: "Categories",
  },
  pt_BR: {
    categories: "Categorias",
  },
  fr_FR: {
    categories: "Catégories",
  },
  de_DE: {
    categories: "Kategorien",
  },
  es_ES: {
    categories: "Categorías",
  }
};

const SKELETON_ITEMS = Array.from({ length: 5 });

export function CategoryNavigation() {
  const { categories, isLoading } = useCategories();
  const {
    activeCategory,
    activeCategoryIndex,
    setActiveCategory,
    setActiveCategoryByIndex,
    language,
  } = useComplianceStore();
  const { branding } = useBranding();
  
  const t = translations[language] || translations.en_US;
  const themeColor = branding?.themeColor || '#3B82F6';

  // Assign icons to categories based on their index in the array
  const categoriesWithIcons = useMemo(() => {
    return categories.map((category, index) => ({
      name: category,
      Icon: index < categoryIcons.length ? categoryIcons[index] : FileText,
      index
    }));
  }, [categories]);

  if (isLoading) {
    return (
      <div className="p-4 space-y-4">
        {SKELETON_ITEMS.map((_, i) => (
          <div key={i} className="h-10 bg-muted rounded animate-pulse" />
        ))}
      </div>
    );
  }

  const handleCategoryClick = (category: string, index: number) => {
    setActiveCategory(category);
    setActiveCategoryByIndex(index);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">{t.categories}</h2>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-2">
          {categoriesWithIcons.map(({ name, Icon, index }) => (
            <Button
              key={name}
              variant={activeCategory === name || activeCategoryIndex === index ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-2 transition-all duration-200 hover:translate-x-1",
                (activeCategory === name || activeCategoryIndex === index) ? "bg-primary text-primary-foreground" : "text-foreground"
              )}
              onClick={() => handleCategoryClick(name, index)}
            >
              <Icon 
                className="h-4 w-4" 
                style={{ color: (activeCategory === name || activeCategoryIndex === index) ? "currentColor" : themeColor }} 
              />
              {name}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}