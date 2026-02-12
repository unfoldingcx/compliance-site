import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

export interface Branding {
  companyName: string;
  shortName: string;
  title: string;
  themeColor: string;
  description: string;
  logo: string;
  favicon: string;
}

export interface MultipleBrandingConfig {
  domains: {
    [key: string]: Branding;
  };
  default: Branding;
}

export function useBranding() {
  const [isLoading, setIsLoading] = useState(true);
  const [config, setConfig] = useState<MultipleBrandingConfig | null>(null);
  const [branding, setBranding] = useState<Branding | null>(null);

  useEffect(() => {
    axios.get('/branding/config.json')
      .then((response) => {
        const config = response.data
        config.default.logo = '/branding/default/logo.png'
        config.default.favicon = '/branding/default/favicon/favicon.ico'

        const domains = _.keys(config.domains) || []
        for (const domain of domains) {
          config.domains[domain].logo = `/branding/${domain}/logo.png`
          config.domains[domain].favicon = `/branding/${domain}/favicon/favicon.ico`
        }

        setConfig(response.data);
        console.log('Configurations loaded:', response.data);
      })
      .catch((error) => {
        console.error('Error loading configurations:', error);

        setConfig({
          domains: {},
          default: {
            companyName: "OUR COMPANY",
            shortName: "OUR COMPANY",
            title: "Central de Compliance",
            logo: "/branding/default/logo.png",
            favicon: "/branding/default/favicon/favicon.ico",
            themeColor: "#BBA268",
            description: "Central de Compliance - Políticas e diretrizes de conformidade."
          }
        })
      })
  }, [])

  useEffect(() => {
    if (config) {
      const hostname = window.location.hostname;
      if (hostname.includes('localhost')) {
        setBranding(config.default);
      } else if (config.domains[hostname]) {
        setBranding(config.domains[hostname]);
      } else {
        setBranding(config.default);
      }
    }
  }, [config])

  useEffect(() => {
    if (branding) {
      // Update document title and metadata
      document.title = branding.title;
      updateMetaTags(branding);

      // Apply theme color to CSS variables
      document.documentElement.style.setProperty('--theme-color', branding.themeColor);
      document.documentElement.style.setProperty('--theme-color-rgb', hexToRgb(branding.themeColor));

      // Update theme-color meta tag
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', branding.themeColor);
      }

      console.log('Branding updated:', branding);
      setIsLoading(false);
    }
  }, [branding]);

  // Update meta tags based on branding
  function updateMetaTags(branding: Branding) {
    // Update OpenGraph and other meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, content);
        const additionalAttr = selector.startsWith('meta[property') ? 'property' : 'name';
        element.setAttribute(additionalAttr, selector.match(/['"]([^'"]*)['"]/)?.[1] || '');
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', 'content', branding.description || `Compliance Center for ${branding.companyName} - Policies and compliance guidelines.`);

    // OpenGraph tags
    updateMetaTag('meta[property="og:title"]', 'content', branding.title);
    updateMetaTag('meta[property="og:description"]', 'content', branding.description || `Compliance resources and guidelines for ${branding.companyName}.`);
    updateMetaTag('meta[property="og:image"]', 'content', `${window.location.origin}${branding.logo}`);
    updateMetaTag('meta[property="og:url"]', 'content', window.location.href);
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    updateMetaTag('meta[property="og:site_name"]', 'content', branding.companyName);

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', branding.title);
    updateMetaTag('meta[name="twitter:description"]', 'content', branding.description || `Compliance resources and guidelines for ${branding.companyName}.`);
    updateMetaTag('meta[name="twitter:image"]', 'content', `${window.location.origin}${branding.logo}`);

    // Favicon 
    const faviconLink = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
    if (faviconLink && branding.favicon) {
      faviconLink.setAttribute('href', branding.favicon);
    }
  }

  // Helper function to convert hex to RGB
  function hexToRgb(hex: string): string {
    // Remove # if present
    hex = hex.replace(/^#/, '');

    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `${r}, ${g}, ${b}`;
  }

  return {
    branding,
    isLoading,
  };
}