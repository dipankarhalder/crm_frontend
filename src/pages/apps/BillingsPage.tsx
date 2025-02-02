import { Header } from "@/components/elements/header";

export const BillingsPage = () => {
  return (
    <>
      <Header pagename="Billings" />
      <div className="flex w-full px-6 pt-2">
        <div className="w-full">
          <div className="flex justify-between items-center py-4 w-full">
            <h1 className="font-medium mr-8 text-base text-black">
              Manage list of Billings
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
