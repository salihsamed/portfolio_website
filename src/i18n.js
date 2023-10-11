import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json"
import tr from "./locales/tr/translation.json"

var lng=window.localStorage.getItem("lang")
if(lng===null) lng="tr";


const resources = {
  en,tr
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng
  });

  export default i18n;