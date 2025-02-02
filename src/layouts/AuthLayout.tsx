import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useAuth } from "@/hooks/use-auth";
import { AuthLogo } from "@/components/elements/auth/AuthLogo";

export const AuthLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="h-screen w-full flex items-center justify-center bg-blue-50">
      <div className="fixed top-0 right-0 h-screen w-[56%] bg-slate-900"></div>
      <div className="relative">
        <div className="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[460px] py-12 px-8 bg-white shadow-2xl rounded-[8px]">
          <div className="flex flex-col text-center mb-6">
            <AuthLogo />
            <h1 className="text-xl font-semibold tracking-tight mb-0">
              {location.pathname === "/registration"
                ? "Create your account"
                : "Hey there, welcome back!"}
            </h1>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};
