import { ISVGElement } from "../types";

export const ArrowUpIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="8"
      viewBox="0 0 14 8"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M13.664 7.003L6.997.336.331 7.003l.33.33L6.997.997l6.337 6.336.33-.33z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
