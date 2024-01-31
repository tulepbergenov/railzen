import "@/__core/styles/index.scss";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "../i18n";
import { MenuProvider } from "../providers";
import { Router } from "../router";

export const App = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <MenuProvider>
          <Router />
        </MenuProvider>
      </BrowserRouter>
    </Suspense>
  );
};
