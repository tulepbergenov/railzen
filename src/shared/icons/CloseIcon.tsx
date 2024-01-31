import { ISVGElement } from "../types";

export const CloseIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        height="19"
        rx="9.5"
        stroke="currentColor"
        width="19"
        x="0.5"
        y="0.5"
      ></rect>
      <path
        d="M13 7l-6 6m6 0L7 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
