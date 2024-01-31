import { useApplyModalStore, useMenuStore } from "@/shared/stores";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export const useMobileMenu = () => {
  const { pathname } = useLocation();

  const isWhite = useMemo(() => {
    return ["/"].includes(pathname);
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
