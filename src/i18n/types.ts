export type Lang = "en" | "de" | "pl";

export const LANGS: Lang[] = ["en", "de", "pl"];

export const LANG_HREF: Record<Lang, string> = {
  en: "/",
  de: "/de/",
  pl: "/pl/",
};

export const LANG_LABEL: Record<Lang, string> = {
  en: "EN",
  de: "DE",
  pl: "PL",
};

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    trading: string;
    supply: string;
    services: string;
    group: string;
    news: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1Lead: string;
    h1Em: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { commodities: string; hubs: string; heritage: string };
    flowAria: string;
  };
  snapshot: {
    title: string;
    indicative: string;
    rows: { name: string }[];
  };
  services: {
    eyebrow: string;
    h2: string;
    sub: string;
    trading: { h3: string; body: string; chips: string[] };
    supply: { h3: string; body: string };
    services: { h3: string; body: string };
  };
  stats: {
    eyebrow: string;
    items: { n: string; l: string }[];
  };
  pillars: {
    eyebrow: string;
    h2: string;
    items: { num: string; h3: string; body: string }[];
  };
  news: {
    eyebrow: string;
    h2: string;
    allCta: string;
    items: { time: string; title: string; more: string }[];
  };
  contact: {
    eyebrow: string;
    h2: string;
    body: string;
    cta: string;
    munichK: string;
    londonK: string;
    emailK: string;
    phoneK: string;
  };
  footer: {
    tagline: string;
    company: string;
    whatWeDo: string;
    offices: string;
    aboutUs: string;
    theGroup: string;
    newsroom: string;
    careers: string;
    munichHQ: string;
    warsaw: string;
    london: string;
    rights: string;
    disclaimer: string;
  };
  langSwitcher: {
    aria: string;
  };
}
