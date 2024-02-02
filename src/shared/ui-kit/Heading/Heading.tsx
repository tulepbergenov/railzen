import classNames from "classnames";
import { createElement, forwardRef } from "react";
import { IHeading } from "./Heading.type";

export const Heading = forwardRef<HTMLHeadingElement, IHeading>(
  ({ as: Component = "h1", children, className, ...props }, ref) => {
    return createElement(
      Component,
      {
        className: classNames(
          "text-[32px] font-light uppercase leading-[43px] md:text-[56px] md:leading-[74px] 2xl:text-[80px] 2xl:leading-[120%]",
          className,
        ),
        ref,
        ...props,
      },
      children,
    );
  },
);

Heading.displayName = "Heading";
