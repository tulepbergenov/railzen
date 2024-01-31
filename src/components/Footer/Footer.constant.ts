import { CONTACT_ITEMS } from "@/shared/constants";

export const FOOTER_OTHER_NAV_ITEMS: {
  href: string;
  name: string;
  isBlank?: boolean;
}[] = [
  {
    href: "https://commerce.ktze.kz/",
    name: "KTZE Commerce",
    isBlank: true,
  },
  {
    href: "https://my.ktze.kz/",
    name: "Личный кабинет",
    isBlank: true,
  },
  {
    href: "/faq",
    name: "FAQ",
  },
  {
    href: "#google-form",
    name: "Отзывы и предложения",
  },
  {
    href: "/vacancies",
    name: "Вакансии",
  },
];

export const FOOTER_NAV_ITEMS: {
  href: string;
  name: string;
}[] = [
  {
    href: "/",
    name: "Главная",
  },
  {
    href: "/about",
    name: "О компании",
  },
  {
    href: "/services-and-tariffs",
    name: "Услуги и тарифы",
  },
  {
    href: "/cooperation",
    name: "Сотрудничество",
  },
  {
    href: "/contacts",
    name: "Контакты",
  },
  {
    href: "/news",
    name: "Новости",
  },
];

export const FOOTER_OTHER_CONTACT_ITEMS: {
  href: string;
  name: string;
}[] = [
  {
    href: "mailto:express@ktze.online",
    name: "Express@ktze.online",
  },
  {
    href: "tel:87710838760",
    name: "7-771-083-87-60",
  },
  {
    href: "mailto:cc@ktze.kz",
    name: "cc@ktze.kz",
  },
];

export const FOOTER_CONTACT_ITEMS = CONTACT_ITEMS;
