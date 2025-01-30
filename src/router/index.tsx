import { createBrowserRouter } from "react-router-dom";

import { applinks } from "@/router/links";
import { SigninPage } from "@/pages/SigninPage";
import { SignupPage } from "@/pages/SignupPage";

export const router = createBrowserRouter([
  { path: applinks.login, element: <SigninPage /> },
  { path: applinks.register, element: <SignupPage /> },
]);
