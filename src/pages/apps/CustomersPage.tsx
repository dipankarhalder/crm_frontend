import { Outlet } from "react-router-dom";
import { Header } from "@/components/elements/header";

export const CustomersPage = () => {
  return (
    <>
      <Header pagename="Customers" />
      <div className="flex w-full px-6 pt-2">
        <Outlet />
      </div>
    </>
  );
};
