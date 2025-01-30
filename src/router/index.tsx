import { createBrowserRouter } from "react-router-dom";

import { applinks } from "@/router/links";

import { AuthLayout } from "@/layouts/AuthLayout";
import { MainLayout } from "@/layouts/MainLayout";
import { ErrorPage } from "@/pages/ErrorPage";

import { SigninPage } from "@/pages/auth/SigninPage";
import { SignupPage } from "@/pages/auth/SignupPage";
import { DashboardPage } from "@/pages/apps/DashboardPage";
import { CustomersPage } from "@/pages/apps/CustomersPage";
import { VendorsPage } from "@/pages/apps/VendorsPage";

export const router = createBrowserRouter([
  {
    path: applinks.login,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SigninPage />,
      },
      {
        path: applinks.register,
        element: <SignupPage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "vendors",
        element: <VendorsPage />,
      },
    ],
  },
]);
