import { CustomerDataTable } from "@/components/elements/dataTable/CustomerTable";
import { vendorsColumns } from "@/components/elements/vendors/Columns";
import { vendorsData } from "@/components/elements/dataTable/Cdata";

export const VendorsPage = () => {
  return (
    <div className="flex w-full">
      <CustomerDataTable
        columns={vendorsColumns}
        data={vendorsData}
        heading={"Manage list of vendors"}
      />
    </div>
  );
};
