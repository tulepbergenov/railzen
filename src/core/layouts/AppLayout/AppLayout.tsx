import { PageTransitionProvider } from "@/core/providers";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <main className="flex-auto" id="main">
      <PageTransitionProvider>
        <Outlet />
      </PageTransitionProvider>
    </main>
  );
};
