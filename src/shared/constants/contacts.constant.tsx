import {
  EmailIcon,
  HotlineIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/shared/icons";
import { ReactNode } from "react";

export const CONTACT_ITEMS: {
  href: string;
  icon: ReactNode;
  name: string;
  label: string;
  isBlank?: boolean;
}[] = [
  {
    href: "tel:88000804747",
    icon: <PhoneIcon />,
    name: "Горячая линия",
    label: "8-800-080-47-47",
  },
  {
    href: "https://wa.me/+77711918816",
    icon: <WhatsAppIcon />,
    name: "Номер WhatsApp",
    label: "8-771-191-88-16",
    isBlank: true,
  },
  {
    href: "https://sk-hotline.kz/",
    icon: <HotlineIcon />,
    name: "Интернет-портал",
    label: "www.sk-hotline.kz",
    isBlank: true,
  },
  {
    href: "mailto:@sk-hotline.kz",
    icon: <EmailIcon />,
    name: "Электронная почта",
    label: "mail@sk-hotline.kz",
  },
];
