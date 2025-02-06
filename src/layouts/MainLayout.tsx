import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";
import { useAuthStore } from "@/store/authStore";
import { useProfileStore } from "@/store/profileStore";
import { useConsumerStore } from "@/store/consumerStore";
import { myProfile, userProfiles } from "@/services/profile.services";
import { consumerLists } from "@/services/consumer.services";
import { applinks } from "@/router/links";

export const MainLayout = () => {
  const { isToken, isLogin } = useAuthStore();
  const { setProfile, setListProfile } = useProfileStore();
  const { setListConsumer } = useConsumerStore();

  const { data: userProfileInformation, isSuccess: userSuccess } = useQuery({
    queryKey: ["userProfile"],
    queryFn: myProfile,
  });

  const { data: listOfConsumer, isSuccess: consumerSuccess } = useQuery({
    queryKey: ["consumers"],
    queryFn: consumerLists,
  });

  const { data: listOfProfiles, isSuccess: profileSuccess } = useQuery({
    queryKey: ["userProfiles"],
    queryFn: userProfiles,
  });

  useEffect(() => {
    if (isToken && isLogin) {
      if (userSuccess) {
        setProfile(userProfileInformation.data);
      }
      if (consumerSuccess) {
        setListConsumer(listOfConsumer.list);
      }
      if (profileSuccess) {
        setListProfile(listOfProfiles.data);
      }
    }
  }, [
    userSuccess,
    userProfileInformation,
    isToken,
    isLogin,
    consumerSuccess,
    profileSuccess,
    listOfConsumer,
    listOfProfiles,
    setProfile,
    setListConsumer,
    setListProfile,
  ]);

  if (!isToken && !isLogin) {
    return <Navigate to={applinks.login} />;
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
