import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { enLocalization } from './enLocalization';
import { jaLocalization } from './jaLocalization';

type LocalizationKeys = keyof typeof enLocalization;

const translations = { en: enLocalization, ja: jaLocalization }
const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode ?? 'en';

const localize = (key: LocalizationKeys): string => i18n.t(key);

export default localize;