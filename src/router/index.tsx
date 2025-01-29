import { createBrowserRouter } from "react-router-dom";

import { SigninPage } from "@/pages/SigninPage";
import { SignupPage } from "@/pages/SignupPage";

export const router = createBrowserRouter([
  { path: "/", element: <SigninPage /> },
  { path: "/registration", element: <SignupPage /> },
]);
