import { useState, useEffect } from 'react';
import { useCategories } from '@/hooks/useComplianceData';
import { useComplianceStore } from '@/store/complianceStore';
import { useBranding } from '@/hooks/useBranding';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, Filter, Grid, List, Menu } from 'lucide-react';
import { 
  FileText, 
  UserCheck, 
  Key, 
  Activity, 
  Lock, 
  Cog, 
  Radio, 
  AlertTriangle,
  Briefcase,
  Layout,
  HardDrive, 
  Clock, 
  Shield, 
  FileCheck, 
  Cloud, 
  Code, 
  Layers, 
  Server, 
  KeyRound
} from 'lucide-react';

// Icon array in the specific order of categories
const categoryIcons = [
  FileText,      // General and PSSI
  UserCheck,     // User awareness and training
  Key,           // Access Authorization Management
  Activity,      // Monitoring and Traceability
  Lock,          // Physical security
  Cog,           // Security related to operations
  Radio,         // Security of communications
  AlertTriangle, // Incident Management
  Briefcase,     // Subcontracting Security
  Layout,        // Project Information Systems
  HardDrive,     // Backups Management
  Clock,         // Business Continuity
  Shield,        // Data Security
  FileCheck,     // Compliance
  Cloud,         // Hosting
  Code,          // Software
  Layers,        // Services and layers
  Server,        // Hypervisor & OS
  KeyRound       // Authentication
];

const translations = {
  en_US: {
    categories: "Categories",
    selectCategory: "Select category",
    allCategories: "All Categories",
    viewAll: "View all categories",
    popular: "Popular Categories"
  },
  pt_BR: {
    categories: "Categorias",
    selectCategory: "Selecionar categoria",
    allCategories: "Todas as Categorias",
    viewAll: "Ver todas as categorias",
    popular: "Categorias Populares"
  },
  fr_FR: {
    categories: "Catégories",
    selectCategory: "Sélectionner une catégorie",
    allCategories: "Toutes les Catégories",
    viewAll: "Voir toutes les catégories",
    popular: "Catégories Populaires"
  },
  de_DE: {
    categories: "Kategorien",
    selectCategory: "Kategorie auswählen",
    allCategories: "Alle Kategorien",
    viewAll: "Alle Kategorien anzeigen",
    popular: "Beliebte Kategorien"
  },
  es_ES: {
    categories: "Categorías",
    selectCategory: "Seleccionar categoría",
    allCategories: "Todas las Categorías",
    viewAll: "Ver todas las categorías",
    popular: "Categorías Populares"
  }
};

export function MobileCategorySelector() {
  const { categories, isLoading } = useCategories();
  const { 
    activeCategory, 
    activeCategoryIndex, 
    setActiveCategory, 
    setActiveCategoryByIndex, 
    language 
  } = useComplianceStore();
  const { branding } = useBranding();
  const [isOpen, setIsOpen] = useState(false);
  const [displayType, setDisplayType] = useState<'drawer' | 'chips'>('chips');
  
  const t = translations[language] || translations.en_US;
  const themeColor = branding?.themeColor || '#3B82F6';

  // Assign icons to categories based on their index in the array
  const categoriesWithIcons = categories.map((category, index) => ({
    name: category,
    Icon: index < categoryIcons.length ? categoryIcons[index] : FileText,
    index
  }));

  // Effect to update active category when language changes
  useEffect(() => {
    if (activeCategoryIndex !== null && categories.length > 0) {
      if (activeCategoryIndex < categories.length) {
        setActiveCategory(categories[activeCategoryIndex]);
      } else {
        // Reset if the index is out of bounds
        setActiveCategoryByIndex(null);
      }
    }
  }, [language, categories, activeCategoryIndex, setActiveCategory, setActiveCategoryByIndex]);

  // Get currently active category with icon
  const currentCategory = categoriesWithIcons.find(cat => 
    cat.name === activeCategory || cat.index === activeCategoryIndex
  );
  const CurrentIcon = currentCategory?.Icon || categoryIcons[0];
  
  if (isLoading) {
    return (
      <div className="p-4 space-y-4">
        <div className="h-10 bg-muted rounded animate-pulse w-full" />
      </div>
    );
  }

  // Handle selection of a category
  const handleCategorySelect = (category: string | null, index: number | null) => {
    setActiveCategory(category);
    setActiveCategoryByIndex(index);
    setIsOpen(false);
  };

  return (
    <div className="w-full mb-4">
      {/* Primary interface - Horizontal scrolling chips for categories */}
      <div className="space-y-4">
        {/* Current category button or dropdown */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{t.categories}</h2>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-2 text-xs"
              onClick={() => setDisplayType(displayType === 'chips' ? 'drawer' : 'chips')}
            >
              {displayType === 'chips' ? <List size={14} /> : <Grid size={14} />}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-between gap-2"
                >
                  {activeCategory ? (
                    <>
                      <CurrentIcon className="h-4 w-4" style={{ color: themeColor }} />
                      <span className="truncate max-w-[180px]">{activeCategory}</span>
                    </>
                  ) : (
                    <>
                      <Filter className="h-4 w-4" />
                      <span>{t.selectCategory}</span>
                    </>
                  )}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] px-0">
                <SheetHeader className="px-4">
                  <SheetTitle>{t.categories}</SheetTitle>
                  <SheetDescription>
                    {t.selectCategory}
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-full py-4">
                  <div className="space-y-1 px-4">
                    <Button
                      variant={activeCategory === null ? "default" : "ghost"}
                      className="w-full justify-start gap-2 h-10"
                      onClick={() => handleCategorySelect(null, null)}
                    >
                      <Filter className="h-4 w-4" />
                      {t.allCategories}
                    </Button>
                    {categoriesWithIcons.map(({ name, Icon, index }) => (
                      <Button
                        key={name}
                        variant={activeCategory === name || activeCategoryIndex === index ? "default" : "ghost"}
                        className="w-full justify-start gap-2 h-10"
                        onClick={() => handleCategorySelect(name, index)}
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Horizontal scrollable category chips */}
        {displayType === 'chips' && (
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex space-x-2 w-max min-w-full">
              <Button
                variant={activeCategory === null ? "default" : "secondary"}
                size="sm"
                className="flex shrink-0 items-center gap-1 h-8"
                onClick={() => handleCategorySelect(null, null)}
              >
                <Filter className="h-3.5 w-3.5" />
                <span>{t.allCategories}</span>
              </Button>
              
              {categoriesWithIcons.map(({ name, Icon, index }) => (
                <Button
                  key={name}
                  variant={activeCategory === name || activeCategoryIndex === index ? "default" : "secondary"}
                  size="sm"
                  className="flex items-center gap-1 shrink-0 h-8"
                  onClick={() => handleCategorySelect(name, index)}
                >
                  <Icon 
                    className="h-3.5 w-3.5" 
                    style={{ color: (activeCategory === name || activeCategoryIndex === index) ? "currentColor" : themeColor }}
                  />
                  <span>{name}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Grid of category cards - alternative view */}
        {displayType === 'drawer' && (
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              className="flex flex-col items-center justify-center h-20 p-2 gap-2"
              onClick={() => handleCategorySelect(null, null)}
            >
              <Filter className="h-6 w-6" />
              <span className="text-xs">{t.allCategories}</span>
            </Button>
            
            {categoriesWithIcons.slice(0, 5).map(({ name, Icon, index }) => (
              <Button
                key={name}
                variant={activeCategory === name || activeCategoryIndex === index ? "default" : "outline"}
                className="flex flex-col items-center justify-center h-20 p-2 gap-2"
                onClick={() => handleCategorySelect(name, index)}
              >
                <Icon 
                  className="h-6 w-6" 
                  style={{ color: (activeCategory === name || activeCategoryIndex === index) ? "currentColor" : themeColor }}
                />
                <span className="text-xs truncate w-full text-center">{name}</span>
              </Button>
            ))}
            
            {categoriesWithIcons.length > 5 && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex flex-col items-center justify-center h-20 p-2 gap-2"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="text-xs">{t.viewAll}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh] px-0">
                  <SheetHeader className="px-4">
                    <SheetTitle>{t.categories}</SheetTitle>
                    <SheetDescription>
                      {t.selectCategory}
                    </SheetDescription>
                  </SheetHeader>
                  <ScrollArea className="h-full py-4">
                    <div className="space-y-1 px-4">
                      <Button
                        variant={activeCategory === null ? "default" : "ghost"}
                        className="w-full justify-start gap-2 h-10"
                        onClick={() => handleCategorySelect(null, null)}
                      >
                        <Filter className="h-4 w-4" />
                        {t.allCategories}
                      </Button>
                      {categoriesWithIcons.map(({ name, Icon, index }) => (
                        <Button
                          key={name}
                          variant={activeCategory === name || activeCategoryIndex === index ? "default" : "ghost"}
                          className="w-full justify-start gap-2 h-10"
                          onClick={() => handleCategorySelect(name, index)}
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
                </SheetContent>
              </Sheet>
            )}
          </div>
        )}
      </div>
    </div>
  );
}