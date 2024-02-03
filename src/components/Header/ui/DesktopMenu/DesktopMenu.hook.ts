import { useApplyModalStore } from "@/shared/stores";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { IS_WHITE_PAGES } from "../../constants";

export const useDesktopMenu = () => {
  const { pathname } = useLocation();
  const { onOpen } = useApplyModalStore();

  const isWhite = useMemo(() => {
    return IS_WHITE_PAGES.includes(pathname);
  }, [pathname]);

  const value = useMemo(
    () => ({
      isWhite,
      onOpen,
    }),
    [isWhite, onOpen],
  );

  return value;
};
