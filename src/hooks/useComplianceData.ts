import { ComplianceItem, LanguageCode, useComplianceStore } from '@/store/complianceStore';
import { useEffect, useState } from 'react';

async function fetchComplianceData(lang: LanguageCode): Promise<ComplianceItem[]> {
  const response = await fetch(`/translations/${lang}.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch compliance data');
  }
  return response.json();
}

export function useComplianceData() {
  const { language } = useComplianceStore();
  const [isLoading, setIsLoading] = useState(true);
  const [complianceItems, setComplianceItems] = useState<ComplianceItem[]>([]);

  useEffect(() => {
    if (language) {
      setIsLoading(true);
      fetchComplianceData(language).then((data) => {
        setComplianceItems(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    }
  }, [language]);

  return {
    data: { complianceItems: complianceItems },
    isLoading: isLoading,
    error: null,
  };
}

export function useCategories() {
  const { data, isLoading, error } = useComplianceData();

  if (isLoading || error || !data) {
    return { categories: [], isLoading, error };
  }

  // Extract unique categories
  const uniqueCategories = Array.from(
    new Set(data.complianceItems.map((item) => item.category))
  );

  return {
    categories: uniqueCategories,
    isLoading,
    error
  };
}