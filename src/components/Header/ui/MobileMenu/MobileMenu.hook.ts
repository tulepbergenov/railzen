import { useApplyModalStore, useMenuStore } from "@/shared/stores";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { IS_WHITE_PAGES } from "../../constants";

export const useMobileMenu = () => {
  const { pathname } = useLocation();

  const isWhite = useMemo(() => {
    return IS_WHITE_PAGES.includes(pathname);
  }, [pathname]);

  const { isOpen, onOpen, onClose } = useMenuStore();

  const { onOpen: onApplyModalOpen } = useApplyModalStore();

  const [isSticky, setIsSticky] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  });

  const value = useMemo(
    () => ({
      isWhite,
      isSticky,
      onOpen,
      isOpen,
      onApplyModalOpen,
      onClose,
    }),
    [isWhite, isSticky, onOpen, isOpen, onApplyModalOpen, onClose],
  );

  return value;
};
