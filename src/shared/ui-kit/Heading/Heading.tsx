import classNames from "classnames";
import { createElement, forwardRef } from "react";
import { IHeading } from "./Heading.type";

export const Heading = forwardRef<HTMLHeadingElement, IHeading>(
  ({ as: Component = "h1", children, className, ...props }, ref) => {
    return createElement(
      Component,
      {
        className: classNames(
          "2xl:text-[80px] font-light uppercase 2xl:leading-[120%]",
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
