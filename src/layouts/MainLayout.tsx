import { Outlet, Navigate } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";

export const MainLayout = () => {
  const isToken = localStorage && localStorage.getItem("token");
  const isLogin = localStorage && localStorage.getItem("isLogin");

  if (!isToken && !isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col w-full">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
