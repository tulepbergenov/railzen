import { ISVGElement } from "../types";

export const ArrowScrollToDown = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="34"
      viewBox="0 0 32 34"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M6 7.995l10 10 10-10-.495-.495L16 17.005 6.495 7.5 6 7.995z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        clipRule="evenodd"
        d="M6 16.995l10 10 10-10-.495-.495L16 26.005 6.495 16.5 6 16.995z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
