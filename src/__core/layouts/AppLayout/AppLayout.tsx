import { PageTransitionProvider } from "@/__core/providers";
import { ApplyModal, Footer, SkipLink } from "@/components";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <SkipLink />
      <PageTransitionProvider>
        <Outlet />
      </PageTransitionProvider>
      <Footer />
      <ApplyModal />
    </>
  );
};
