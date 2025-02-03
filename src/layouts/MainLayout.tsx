// import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";
import { useAuthStore } from "@/store/authStore";
// import { myProfile } from "@/services/profile.services";

export const MainLayout = () => {
  const { isToken, isLogin } = useAuthStore();
  // const [profileInfo, setProfileInfo] = useState("");

  // const getMyProfile = () => {
  //   myProfile()
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     .then((res: any) => {
  //       if (res.status === 200) {
  //         setProfileInfo(res.data);
  //       }
  //     })
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   if (isToken && isLogin) {
  //     getMyProfile();
  //   }
  // }, [isToken, isLogin]);

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
