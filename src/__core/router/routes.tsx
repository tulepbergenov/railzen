import {
  ArticlePage,
  FaqPage,
  HomePage,
  HotlinePage,
  NewsPage,
  NotFoundPage,
} from "@/pages";
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
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/:articleId",
        element: <ArticlePage />,
      },
      {
        path: "/hotline",
        element: <HotlinePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
