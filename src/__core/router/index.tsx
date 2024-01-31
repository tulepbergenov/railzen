import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  const page = useRoutes(routes);

  const { pathname } = useLocation();

  if (!page) return null;

  return (
    <AnimatePresence initial={false} mode="wait">
      {cloneElement(page, { key: pathname })}
    </AnimatePresence>
  );
};
