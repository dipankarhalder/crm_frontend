import { useEffect, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/elements/header";
import { CustomerDataTable } from "@/components/elements/dataTable/CustomerTable";
import { vendorsColumns } from "@/components/elements/vendors/Columns";
import { useProfileStore } from "@/store/profileStore";
import { userProfiles } from "@/services/profile.services";

export const VendorsPage = () => {
  const { toast } = useToast();
  const { listprofile, setListProfile } = useProfileStore();

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
    getListProfile();
  }, [getListProfile]);

  return (
    listprofile && (
      <>
        <Header pagename="Collaborators" />
        <div className="flex w-full px-6 pt-2">
          <CustomerDataTable
            columns={vendorsColumns}
            data={listprofile}
            heading={"Manage list of Collaborators"}
            filterData={"name"}
          />
        </div>
      </>
    )
  );
};
