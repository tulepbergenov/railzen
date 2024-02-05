import { PageTransitionProvider } from "@/__core/providers";
import { ApplyModal, Footer, Header, SkipLink } from "@/components";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <SkipLink />
      <Header />
      <PageTransitionProvider>
        <main className="relative flex-auto" id="main">
          <Outlet />
        </main>
      </PageTransitionProvider>
      <Footer />
      <ApplyModal />
    </>
  );
};
