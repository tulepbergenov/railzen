import { ISVGElement } from "../types";

export const ArrowLeftIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 11 20"
      width="11"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M10.505 20l-10-10 10-10L11 .495 1.495 10 11 19.505l-.495.495z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
