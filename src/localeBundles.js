/**
 * The bundles here are configured so that each locale only requires loading a single webpack chunk.
 */

const bundles = {
  en: () => import(/* webpackChunkName: "en" */ './locales/en.json'),
  vn: () => import(/* webpackChunkName: "es" */ './locales/vn.json'),
  kr: () => import(/* webpackChunkName: "zh" */ './locales/kr.json'),
};

// generate whitelist for i18next
export const availableLocales = Object.keys(bundles);

export default bundles;
