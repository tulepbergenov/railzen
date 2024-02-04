import {
  AboutPage,
  ArticlePage,
  ContactsPage,
  EmployeePage,
  FaqPage,
  HomePage,
  HotlinePage,
  NewsPage,
  NotFoundPage,
  TrackingPage,
  VacanciesPage,
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
        path: "/vacancies",
        element: <VacanciesPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/about/:employeeId",
        element: <EmployeePage />,
      },
      {
        path: "/tracking",
        element: <TrackingPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
