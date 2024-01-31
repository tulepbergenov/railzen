import { ApplyModal } from "@/components";
import { PageTransitionProvider } from "@/core/providers";
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
