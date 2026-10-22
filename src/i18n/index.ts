import en from './en';
import nl from './nl';

export type Lang = 'en' | 'nl';
export type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, nl: nl as Dict };

/** Prefix a root path with the site's base folder (empty on www.seaseas.nl). */
export const withBase = (p: string): string => import.meta.env.BASE_URL.replace(/\/$/, '') + p;

export const t = (lang: Lang): Dict => dicts[lang];

/** Path of a page in the given language, e.g. url('nl', 'privacy') -> '/nl/privacy/'. */
export const url = (lang: Lang, page = ''): string => {
  const base = lang === 'en' ? '/' : '/nl/';
  return withBase(page ? `${base}${page}/` : base);
};

/** Path of a news article, e.g. articleUrl('en', 'tse-grant') -> '/news/tse-grant/'. */
export const articleUrl = (lang: Lang, slug: string): string => url(lang, `news/${slug}`);

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'nl' : 'en');

/** House style: show "CO₂" with a properly sized subscript. Use with set:html. */
export const co2 = (s: string): string => s.replace(/CO₂/g, 'CO<span class="sub2">2</span>');

/** Format a news date as "30 July 2026" / "30 juli 2026". */
export const newsDate = (lang: Lang, d: Date): string =>
  new Intl.DateTimeFormat(lang === 'nl' ? 'nl-NL' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
