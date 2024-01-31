import { ISVGElement } from "../types";

export const UserIcon = ({ ...props }: ISVGElement) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.312 14c5.52 0 10 2.093 10 4.667V22h-20v-3.333c0-2.574 4.48-4.667 10-4.667zm8.666 4.667c0-1.84-3.88-3.334-8.667-3.334-4.786 0-8.666 1.494-8.666 3.334v2h17.333v-2zM12.311 2a4.667 4.667 0 110 9.334 4.667 4.667 0 010-9.334zm0 1.333a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
