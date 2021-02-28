import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import bundles, { availableLocales } from './localeBundles';
import en from './locales/en.json';
import kr from './locales/kr';
import vn from './locales/vn';

const DEFAULT_LOCALE = 'en';

// load the right bundle depending on the requested locale
// option to include a default locale so it's always bundled and can be used as fallback
function loadLocaleBundle(locale) {
  if (locale !== DEFAULT_LOCALE) {
    return bundles[locale]()
      .then((data) => data.default) // ES6 default import
      .catch((err) => {
        console.error(err);
      });
  }
  return Promise.resolve(en);
}
const langDetectorOptions = {
  // order and from where user language should be detected
  order: ['cookie', 'localStorage', 'navigator'],

  // keys or params to lookup language from
  lookupCookie: 'locale',
  lookupLocalStorage: 'locale',

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

const backendOptions = {
  loadPath: '{{lng}}|{{ns}}', // used to pass language and namespace to custom XHR function
  request: (options, url, payload, callback) => {
    // instead of loading from a URL like i18next-http-backend is intended for, we repurpose this plugin to
    // load webpack chunks instead by overriding the default request behavior
    // it's easier to use webpack in our current CRA to dynamically import a JSON with the translations
    // than to update and serve a static folder with JSON files on the CDN with cache invalidation
    try {
      const [lng] = url.split('|');
      console.log(123);
      // this mocks the HTTP fetch plugin behavior so it works with the backend AJAX pattern in this XHR library
      // https://github.com/i18next/i18next-http-backend/blob/master/lib/request.js#L56
      loadLocaleBundle(lng).then((data) => {
        callback(null, {
          data: JSON.stringify(data),
          status: 200, // status code is required by XHR plugin to determine success or failure
        });
      });
    } catch (e) {
      console.error(e);
      callback(null, {
        status: 500,
      });
    }
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        // translation is the default namespace
        translation: en,
      },
      vn: {
        translation: vn,
      },
      kr: {
        translation: kr,
      },
    },
    fallbackLng: DEFAULT_LOCALE,
    // debug: process.env.NODE_ENV !== 'production',
    debug: true,
    // ns: ['translations'],
    // defaultNS: 'translations',
    // keySeparator: false,
    //whitelist: ['en', 'vn', 'kr'], // available languages for browser dector to pick from
    whitelist: availableLocales, // available languages for browser dector to pick from
    detection: langDetectorOptions,
    interpolation: {
      escapeValue: false,
      //   formatSeparator: ',',
      format: function (value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        if (value instanceof Date) return moment(value).format(format);
        return value;
      },
    },
    backend: backendOptions,
  });

export default i18n;
