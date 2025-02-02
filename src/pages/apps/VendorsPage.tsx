import { Header } from "@/components/elements/header";
import { CustomerDataTable } from "@/components/elements/dataTable/CustomerTable";
import { vendorsColumns } from "@/components/elements/vendors/Columns";
import { vendorsData } from "@/components/elements/dataTable/Cdata";

export const VendorsPage = () => {
  return (
    <>
      <Header pagename="Collaborators" />
      <div className="flex w-full px-6 pt-2">
        <CustomerDataTable
          columns={vendorsColumns}
          data={vendorsData}
          heading={"Manage list of Collaborators"}
          filterData={"name"}
        />
      </div>
    </>
  );
};
