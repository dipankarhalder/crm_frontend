import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";

function getPageName(url: string) {
  const page = url
    .replace(/^\/+/, "")
    .replace(/^./, (str) => str.toUpperCase());

  if (page.startsWith("Customers")) {
    return "Customers";
  } else if (page.startsWith("Collaborator")) {
    return "Collaborator";
  } else if (page.startsWith("Calendar")) {
    return "Calendar";
  } else if (page.startsWith("Billing")) {
    return "Billing";
  }

  return "Unknown Page";
}

export const MainLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-white shadow-sm">
            <div className="flex items-center gap-2 px-6">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#" className="text-xs">
                      CRM Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-xs">
                      {getPageName(location.pathname)}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  {/* {location.key && (
                    <>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-xs">
                          {location.key}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </>
                  )} */}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex px-6 pt-2">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
