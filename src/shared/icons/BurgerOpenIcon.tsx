import { ISVGElement } from "../types";

export const BurgerOpenIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="33"
      viewBox="0 0 32 33"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_360_18524)" fill="currentColor">
        <rect height="2" rx="1" width="32" x="0.094" y="11.835"></rect>
        <rect height="2" rx="1" width="32" x="0.094" y="19.835"></rect>
      </g>
      <defs>
        <clipPath id="clip0_360_18524">
          <path
            d="M0 0H32V32H0z"
            fill="transparent"
            transform="translate(0 .835)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
