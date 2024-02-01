import { DisclosureProps } from "@headlessui/react";
import { ReactNode } from "react";

export interface IAccordion extends DisclosureProps<"div"> {
  heading: ReactNode;
  children: ReactNode;
}
