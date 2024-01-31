import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    debug: import.meta.env.MODE === "development" ? true : false,
    fallbackLng: "ru",
    lng: localStorage.getItem("APP_LANG") || "ru",
  });

export default i18n;
