import { useEffect, useCallback } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/elements/sidebar/AppSidebar";
import { useAuthStore } from "@/store/authStore";
import { useProfileStore } from "@/store/profileStore";
import { myProfile } from "@/services/profile.services";

export const MainLayout = () => {
  const { toast } = useToast();
  const { isToken, isLogin } = useAuthStore();
  const { setProfile, setLoading } = useProfileStore();

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

  useEffect(() => {
    if (isToken && isLogin) {
      getMyProfile();
    }
  }, [isToken, isLogin, getMyProfile]);

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
