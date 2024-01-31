import classNames from "classnames";
import { ISkipLink } from "./SkipLink.type";

export const SkipLink = ({ className, ...props }: ISkipLink) => {
  return (
    <a
      className={classNames(
        "sr-only focus:outline-none focus-visible:not-sr-only focus-visible:bg-[#244563] focus-visible:py-[10px] focus-visible:text-center focus-visible:text-white focus-visible:underline focus-visible:shadow-md",
        className,
      )}
      href="#main"
      {...props}
    >
      Перейти к основному содержанию
    </a>
  );
};
