import { create } from 'zustand';

export interface ComplianceItem {
  category: string;
  question: string;
  answer: string;
}

export type LanguageCode = 'en_US' | 'pt_BR' | 'fr_FR' | 'de_DE' | 'es_ES';

interface ComplianceStore {
  activeCategoryIndex: number | null; // Using index instead of direct category name
  activeCategory: string | null;
  searchQuery: string;
  language: LanguageCode;
  setActiveCategoryByIndex: (index: number | null) => void;
  setActiveCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  setLanguage: (language: LanguageCode) => void;
}

export const useComplianceStore = create<ComplianceStore>((set) => ({
  activeCategoryIndex: null,
  activeCategory: null,
  searchQuery: '',
  language: 'en_US', // Default language
  setActiveCategoryByIndex: (index) => set({ activeCategoryIndex: index, activeCategory: null }),
  setActiveCategory: (category) => set({ activeCategory: category, activeCategoryIndex: null }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setLanguage: (language) => set({ language }),
}));