import enMessages from '../translations/en.json'
import plMessages from '../translations/pl.json'
import ukMessages from '../translations/uk.json'

import moment from 'moment'
import 'moment/locale/pl'

const SUPPORTED_LOCALES = ['en', 'pl', 'uk']
type SupportedLocale = typeof SUPPORTED_LOCALES[number]

const messages: Record<SupportedLocale, Record<string, string>> = {
  en: enMessages as Record<string, string>,
  pl: plMessages as Record<string, string>,
  uk: ukMessages as Record<string, string>
};

const language = navigator.language.split(/[-_]/)[0] as SupportedLocale;

const enLocale: SupportedLocale = 'en';

export let mergedMessages: Record<string, string> = {};
export let selectedLanguage: SupportedLocale = language;

if (selectedLanguage === enLocale) {
  mergedMessages = messages[enLocale];
} else {
  prepareMessagesForNonEnglishLocale();
}

moment.locale(selectedLanguage);

function prepareMessagesForNonEnglishLocale() {
  if (SUPPORTED_LOCALES.includes(selectedLanguage)) {
    mergedMessages = { ...messages[enLocale], ...messages[selectedLanguage] };
  } else {
    mergedMessages = messages[enLocale];
    selectedLanguage = enLocale; // Switch locale to en if user locale is not supported
    console.warn(`Locale: [${language}] is not supported. Falling back to en locale.`);
  }
}