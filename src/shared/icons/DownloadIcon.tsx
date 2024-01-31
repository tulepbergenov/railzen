import { ISVGElement } from "../types";

export const DownloadIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_318_40681)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path d="M.938 23.063h22.124M5.766 13.406l4.873 4.889c.732.732 1.92.732 2.652 0l4.943-4.936M11.953 18.844V.937"></path>
      </g>
      <defs>
        <clipPath id="clip0_318_40681">
          <path d="M0 0H24V24H0z" fill="transparent"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
