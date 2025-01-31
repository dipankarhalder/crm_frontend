import { CustomerDataTable } from "@/components/elements/dataTable/CustomerTable";
import { customerColumns } from "@/components/elements/customer/Columns";
import { customerData } from "@/components/elements/dataTable/Cdata";

export const CustomersPage = () => {
  return (
    <div className="flex w-full">
      <CustomerDataTable
        columns={customerColumns}
        data={customerData}
        heading={"Manage list of customers"}
      />
    </div>
  );
};
