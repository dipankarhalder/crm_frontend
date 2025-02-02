import { Header } from "@/components/elements/header";

export const DashboardPage = () => {
  return (
    <>
      <Header pagename="Dashboard" />
      <div className="flex w-full px-6 pt-2">
        <div className="w-full">
          <div className="flex justify-between items-center py-4 w-full">
            <h1 className="font-medium mr-8 text-base text-black">Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
};
