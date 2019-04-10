import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './public/locales/en/translation.json';
import translationFI from './public/locales/fi/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fi: {
    translation: translationFI
  }
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'fi',
    debug: true,
    whitelist: ['fi', 'en'],

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
