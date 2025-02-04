import { useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/elements/header";
import { useConsumerStore } from "@/store/consumerStore";
import { consumerLists } from "@/services/consumer.services";

export const CustomersPage = () => {
  const { toast } = useToast();
  const { setListConsumer } = useConsumerStore();

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

  useEffect(() => {
    getListConsumer();
  }, [getListConsumer]);

  return (
    <>
      <Header pagename="Customers" />
      <div className="flex w-full px-6 pt-2">
        <Outlet />
      </div>
    </>
  );
};
