import { IHeadingElement } from "@/shared/types";
import { ReactNode } from "react";

export interface IHeading extends IHeadingElement {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}
