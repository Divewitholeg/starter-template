import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import et from "./locales/et.json";
import vi from "./locales/vi.json";

const messages = {
  en: Object.assign(en),
  ru: Object.assign(ru),
  //ru: { header: { heading: "Елена Ким" } },
  et: Object.assign(et),
  vi: Object.assign(vi),
};

export default createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: navigator.language.substring(0, 2), // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});
