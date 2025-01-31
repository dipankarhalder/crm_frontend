import { CustomerDataTable } from "@/components/elements/dataTable/CustomerTable";
import { customerColumns } from "@/components/elements/customer/Columns";
import { customerData } from "@/components/elements/dataTable/Cdata";

export const ListCustomer = () => {
  return (
    <CustomerDataTable
      columns={customerColumns}
      data={customerData}
      heading={"Manage list of customers"}
      filterData={"email"}
    />
  );
};
