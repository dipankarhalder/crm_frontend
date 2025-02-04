import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { applinks } from "@/router/links";
import { useConsumerStore } from "@/store/consumerStore";

function getInitials(name: string) {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
}

export const ViewCustomer = () => {
  const params = useParams();
  const { listConsumer } = useConsumerStore();

  const foundUser =
    listConsumer && listConsumer.find((u: any) => u._id === params.id);

  const projectLists = [
    {
      name: "abc wedding ceremony",
      price: 25000,
      date: "1992-10-29",
      paid: 25000,
      pending: 0,
      status: "Completed",
    },
    {
      name: "xyz wedding ceremony",
      price: 25000,
      date: "1992-04-29",
      paid: 10000,
      pending: 15000,
      status: "Payment pending",
    },
    {
      name: "jhalli wedding ceremony",
      price: 25000,
      date: "1990-03-29",
      paid: 10000,
      pending: 15000,
      status: "Payment pending",
    },
    {
      name: "Next wedding ceremony",
      price: 25000,
      date: "1992-12-29",
      paid: 18000,
      pending: 8000,
      status: "Payment pending",
    },
    {
      name: "abc wedding ceremony",
      price: 25000,
      date: "1992-13-29",
      paid: 25000,
      pending: 0,
      status: "Handove files",
    },
  ];

  return (
    <div className="flex flex-col items-center py-4 px-[22rem] w-full">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="font-medium mr-8 text-base text-black">
          <Link to={applinks.customers} className="flex items-center">
            <ArrowLeft className="mr-5 w-5 h-5" /> Consumer Details
          </Link>
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col border border-slate-300 mb-10 w-full rounded-md overflow-hidden">
          {foundUser && (
            <>
              <div className="flex justify-between items-start py-5 px-6">
                <div className="flex gap-6">
                  <div>
                    <span className="flex w-[80px] h-[80px] bg-blue-200 text-blue-800 items-center justify-center text-2xl font-bold rounded-full">
                      {getInitials(foundUser.name)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-base text-black mb-3">
                      {foundUser.name}
                    </h1>
                    <p className="text-xs font-normal mb-1">
                      Email:{" "}
                      <span className="text-sm ml-2">{foundUser.email}</span>
                    </p>
                    <p className="text-xs font-normal">
                      Phone:{" "}
                      <span className="text-sm ml-2">{foundUser.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-100 py-4 px-6">
                <div className="w-[103px]">
                  <h6 className="text-sm font-medium mb-1">Address:</h6>
                </div>
                <div>
                  <p className="text-xs font-medium leading-[20px]">
                    {foundUser.address.area}, {foundUser.address.landmark},{" "}
                    {foundUser.address.city},{foundUser.address.state} -{" "}
                    {foundUser.address.pincode}.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <p className="text-xs mb-2 font-medium text-slate-500">
          List of events information
        </p>
        <div className="flex">
          <div className="flex flex-col w-full">
            {projectLists.map((item) => (
              <div
                key={item.date}
                className="flex flex-col border border-slate-200 mb-3 w-full rounded-md py-3.5 px-4 relative"
              >
                <h6 className="text-sm font-bold mb-2">{item.name}</h6>
                <div className="absolute right-3.5 bottom-4">
                  <Link
                    to=""
                    className="font-medium text-xs px-2 py-1 bg-blue-200 rounded-md text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 ease-in-out transition"
                  >
                    More Details
                  </Link>
                </div>
                <p className="flex items-center">
                  <span className="text-xs font-normal w-10">Date:</span>{" "}
                  <span className="text-xs font-bold mr-3">{item.date}</span>{" "}
                  <span className="text-xs font-medium text-red-600 bg-red-100 px-1.5 py-1 rounded-md">
                    ({item.status})
                  </span>
                </p>
                <p className="flex items-center mb-1">
                  <span className="text-xs font-normal w-10">Cost:</span>{" "}
                  <span className="text-xs font-bold mr-3">
                    Rs. {item.price}/-
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="text-xs font-normal w-10">Paid:</span>{" "}
                  <span className="text-xs font-medium mr-3">
                    Rs. {item.paid}/-{" "}
                    <b> &nbsp;(Rs. {item.pending}/- Pending)</b>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
