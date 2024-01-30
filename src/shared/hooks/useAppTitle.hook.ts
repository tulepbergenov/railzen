import { useTitle } from "react-use";

const baseTitle = "KTZ Express";

export const useAppTitle = (title?: string) => {
  useTitle(
    title && title.trim().length > 0 ? `${title} | ${baseTitle}` : baseTitle,
  );
};
