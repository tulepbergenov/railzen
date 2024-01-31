import { ISVGElement } from "../types";

export const BurgerCloseIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="33"
      viewBox="0 0 32 33"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        fill="currentColor"
        height="2"
        rx="1"
        transform="scale(-1 1) rotate(-45 19.067 47.658)"
        width="32"
      ></rect>
      <rect
        fill="currentColor"
        height="2"
        rx="1"
        transform="rotate(-45 4.073 27.441)"
        width="32"
        x="4.073"
        y="27.441"
      ></rect>
    </svg>
  );
};
