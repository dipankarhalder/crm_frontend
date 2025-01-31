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
import { CalendarPage } from "@/pages/apps/CalendarPage";
import { BillingsPage } from "@/pages/apps/BillingsPage";

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
        path: applinks.dashboard,
        element: <DashboardPage />,
      },
      {
        path: applinks.customers,
        element: <CustomersPage />,
      },
      {
        path: applinks.vendors,
        element: <VendorsPage />,
      },
      {
        path: applinks.calendar,
        element: <CalendarPage />,
      },
      {
        path: applinks.billing,
        element: <BillingsPage />,
      },
    ],
  },
]);
