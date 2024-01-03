import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(Backend) // load translations using http (default public/assets/locales)
	.use(initReactI18next) // pass the i18n instance to react-i18next.
	.init({
		lng: "en", // if user hasn't set a language, then we will show english.
		fallbackLng: "en", // use en if detected lng is not available
		debug: true,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: "/assets/locales/{{lng}}/translation.json", // load translations from /public/languages/{lng}/translation.json
		},
	});

export default i18n;
