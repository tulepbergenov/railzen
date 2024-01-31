import { PageTransitionProvider } from "@/__core/providers";
import { ApplyModal } from "@/components";
import { useApplyModalStore } from "@/shared/stores";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  const { isOpen, onClose } = useApplyModalStore();

  return (
    <>
      <PageTransitionProvider>
        <Outlet />
      </PageTransitionProvider>
      <ApplyModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
