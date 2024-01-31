import { ISVGElement } from "../types";

export const TriangleIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="11"
      viewBox="0 0 9 11"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 5.5l-9 5.196V.304L9 5.5z" fill="currentColor"></path>
    </svg>
  );
};
