import { ISVGElement } from "../types";

export const RoundedCheckIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="10" cy="10" fill="currentColor" r="10"></circle>
      <path d="M5 8.5l3 5L15 7" stroke="#fff" strokeWidth="1.5"></path>
    </svg>
  );
};
