import { useApplyModalStore } from "@/shared/stores";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useDesktopMenu = () => {
  const { pathname } = useLocation();
  const { onOpen } = useApplyModalStore();

  const isWhite = useMemo(() => {
    return ["/"].includes(pathname);
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
