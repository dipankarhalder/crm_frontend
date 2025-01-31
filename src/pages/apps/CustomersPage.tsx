import { Outlet } from "react-router-dom";

export const CustomersPage = () => {
  return (
    <div className="flex w-full">
      <Outlet />
    </div>
  );
};
