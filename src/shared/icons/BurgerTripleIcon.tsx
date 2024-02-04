import { ISVGElement } from "../types";

export const BurgerTripleIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 22 18"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 9h20M1 1h20M1 17h20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
