import { PageTransitionProvider } from "@/__core/providers";
import { ApplyModal, Footer } from "@/components";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <PageTransitionProvider>
        <Outlet />
      </PageTransitionProvider>
      <Footer />
      <ApplyModal />
    </>
  );
};
