import en from './en';
import nl from './nl';

export type Lang = 'en' | 'nl';
export type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, nl: nl as Dict };

export const t = (lang: Lang): Dict => dicts[lang];

/** Path of a page in the given language, e.g. url('nl', 'privacy') -> '/nl/privacy/'. */
export const url = (lang: Lang, page = ''): string => {
  const base = lang === 'en' ? '/' : '/nl/';
  return page ? `${base}${page}/` : base;
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'nl' : 'en');
