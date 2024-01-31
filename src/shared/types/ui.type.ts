import { ComponentProps, HTMLAttributes, ReactNode } from "react";

export interface IDivElement extends ComponentProps<"div"> {}

export interface ISVGElement extends ComponentProps<"svg"> {}

export interface IAnchorElement extends ComponentProps<"a"> {}

export interface IButtonElement extends ComponentProps<"button"> {}

export interface IUListElement extends ComponentProps<"ul"> {}

export interface IHeadingElement extends HTMLAttributes<HTMLHeadingElement> {}

export interface ILayout {
  children: ReactNode;
}
