import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { en } from './en';
import { ja } from './ja';

type LocalizationKeys = keyof typeof en;

const translations = { en, ja };
const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode ?? 'en';

const localize = (key: LocalizationKeys): string => i18n.t(key);

export default localize;
