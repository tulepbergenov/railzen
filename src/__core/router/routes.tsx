import { FaqPage, HomePage, NotFoundPage } from "@/pages";
import { RouteObject } from "react-router-dom";
import { AppLayout } from "../layouts";

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
