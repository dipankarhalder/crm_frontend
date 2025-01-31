import { CustomerDataTable } from "@/components/elements/customer/CustomerTable";
import { customerColumns } from "@/components/elements/customer/Columns";
import { customerData } from "@/components/elements/customer/Cdata";

export const CustomersPage = () => {
  return (
    <div className="flex w-full">
      <CustomerDataTable columns={customerColumns} data={customerData} />
    </div>
  );
};
