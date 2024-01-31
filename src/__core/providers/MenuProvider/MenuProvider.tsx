import { goToTop } from "@/shared/lib";
import { useMenuStore } from "@/shared/stores";
import { ILayout } from "@/shared/types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const MenuProvider = ({ children }: ILayout) => {
  const { isOpen, onClose } = useMenuStore();
  const { pathname } = useLocation();

  useEffect(() => {
    goToTop();
  }, [pathname]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const body = document.body;

    if (body) {
      if (isOpen) {
        body.style.overflow = "hidden";
        return;
      }

      if (!isOpen) {
        body.style.overflow = "visible";
        return;
      }
    }
  }, [isOpen]);

  return <>{children}</>;
};
