import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import español from '../locales/español.json'
import ingles from '../locales/ingles.json'
import portugues from '../locales/portugues.json'

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: español
        },
        en: {
            translation: ingles
        },
        pt: {
            translation: portugues
        }
    }
});
