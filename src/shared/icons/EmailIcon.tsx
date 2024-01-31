import { ISVGElement } from "../types";

export const EmailIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_190_3913)">
        <path
          clipRule="evenodd"
          d="M12.623 24c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm6.223-7.785a.269.269 0 00.268-.268V8.414l-6.105 4.848a.62.62 0 01-.772 0L6.132 8.414v7.533a.269.269 0 00.268.268h12.446zm-.936-8.43l-5.287 4.198-5.287-4.199H17.91zm2.446.268v7.894c0 .833-.678 1.51-1.51 1.51H6.4c-.833 0-1.51-.677-1.51-1.51V8.053c0-.833.678-1.51 1.51-1.51h12.446c.832 0 1.51.677 1.51 1.51z"
          fill="currentColor"
          fillRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_190_3913">
          <path
            d="M0 0H24V24H0z"
            fill="transparent"
            transform="translate(.623)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
