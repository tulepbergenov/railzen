import { ISVGElement } from "../types";

export const PhoneContactIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_247_18915)">
        <path
          d="M4.194 1.008L9.418 6.23c-.865.864-1.73 1.728-2.597 2.59a1.41 1.41 0 00-.123 1.853c.899 1.194 2.223 2.78 3.368 3.925.977.977 2.233 1.893 3.371 2.7.55.39 1.309.301 1.784-.177.855-.86 1.711-1.718 2.568-2.576l5.224 5.224-2.52 2.52c-1.897 1.896-5.385.917-8.817-1.386C5.336 16.648-1.866 7.068 1.638 3.564l2.556-2.556z"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};
