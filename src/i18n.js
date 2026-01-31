import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../public/locales/en/translation.json";
import cnTranslation from "../public/locales/cn/translation.json";

if (typeof window !== "undefined") {
  i18n.use(Backend).use(I18nextBrowserLanguageDetector);
}

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  supportedLngs: ["en", "cn"],
  nonExplicitSupportedLngs: true,
  load: "languageOnly",
  lng: "en",
  resources: {
    en: { translation: enTranslation },
    cn: { translation: cnTranslation },
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  detection: {
    order: ["querystring", "localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  initImmediate: false,
});

export default i18n;
