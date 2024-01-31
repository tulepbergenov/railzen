import { ComponentProps, ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface ISVGElement extends ComponentProps<"svg"> {}

export interface IInputElement extends ComponentProps<"input"> {}
