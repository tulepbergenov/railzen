import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.type";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={classNames(
          "inline-block w-full border-b border-b-[#244563] px-[8px] py-[18px] text-[16px] font-normal leading-[140%] text-[#244563] placeholder:text-[#6D6E73]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
