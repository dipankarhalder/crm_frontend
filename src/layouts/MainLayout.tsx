import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import {
  SidebarInset,
  SidebarProvider,
  // SidebarTrigger,
} from "@/components/ui/sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";

// function getPageName(url: string) {
//   const page = url
//     .replace(/^\/+/, "")
//     .replace(/^./, (str) => str.toUpperCase());

//   if (page.startsWith("Dashboard")) {
//     return "Dashboard";
//   } else if (page.startsWith("Customers")) {
//     return "Customers";
//   } else if (page.startsWith("Collaborator")) {
//     return "Collaborator";
//   } else if (page.startsWith("Calendar")) {
//     return "Calendar";
//   } else if (page.startsWith("Billing")) {
//     return "Billing";
//   }

//   return "Unknown Page";
// }

export const MainLayout = () => {
  const { user } = useAuth();

  if (!user) {
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
