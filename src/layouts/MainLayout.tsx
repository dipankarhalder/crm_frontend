import { useEffect, useCallback } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";
import { useAuthStore } from "@/store/authStore";
import { useProfileStore } from "@/store/profileStore";
import { useConsumerStore } from "@/store/consumerStore";
import { myProfile, userProfiles } from "@/services/profile.services";
import { consumerLists } from "@/services/consumer.services";
import { applinks } from "@/router/links";

export const MainLayout = () => {
  const { toast } = useToast();
  const { isToken, isLogin } = useAuthStore();
  const { setProfile, setLoading, setListProfile } = useProfileStore();
  const { setListConsumer } = useConsumerStore();

  const getMyProfile = useCallback(async () => {
    setLoading(true);
    try {
      const res = await myProfile();
      if (res.status === 400) {
        return toast({ title: res.message, variant: "failed" });
      }
      setProfile(res.data);
    } catch (err: any) {
      toast({ title: err.message, variant: "failed" });
    } finally {
      setLoading(false);
    }
  }, [setLoading, setProfile, toast]);

  const getListConsumer = useCallback(async () => {
    try {
      const res = await consumerLists();
      if (res.status === 400) {
        return toast({ title: res.message, variant: "failed" });
      }
      setListConsumer(res.list);
    } catch (err: any) {
      toast({ title: err.message, variant: "failed" });
    }
  }, [setListConsumer, toast]);

  const getListProfile = useCallback(async () => {
    try {
      const res = await userProfiles();
      if (res.status === 400) {
        return toast({ title: res.message, variant: "failed" });
      }
      setListProfile(res.data);
    } catch (err: any) {
      toast({ title: err.message, variant: "failed" });
    }
  }, [setListProfile, toast]);

  useEffect(() => {
    if (isToken && isLogin) {
      getMyProfile();
      getListProfile();
      getListConsumer();
    }
  }, [isToken, isLogin, getMyProfile, getListProfile, getListConsumer]);

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
