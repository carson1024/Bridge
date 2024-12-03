import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Use HTTP backend to load translations
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language
    lng: 'en', // Default language
    backend: {
      loadPath: '/locales/{{lng}}/common.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Avoid suspense during server-side rendering
    },
  });

export default i18n;
