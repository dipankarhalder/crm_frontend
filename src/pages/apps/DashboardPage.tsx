import { Link } from "react-router-dom";

import { Combine, CircleUser, CalendarFold, ChevronRight } from "lucide-react";
import { Header } from "@/components/elements/header";

export const DashboardPage = () => {
  return (
    <>
      <Header pagename="Dashboard" />
      <div className="flex w-full px-6 pt-2">
        <div className="w-full py-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-medium mr-8 text-base text-black">Dashboard</h1>
          </div>
          <div className="flex justify-between">
            <div className="w-[70%]">
              <div className="flex flex-col">
                <ul className="flex gap-4">
                  <li className="border border-slate-300 rounded-md px-5 pt-4 pb-3">
                    <Link
                      to="/"
                      className="flex flex-col items-center w-full gap-2"
                    >
                      <CircleUser />
                      <p className="font-medium text-sm">Add Customers</p>
                    </Link>
                  </li>
                  <li className="border border-slate-300 rounded-md px-5 pt-4 pb-3">
                    <Link
                      to="/"
                      className="flex flex-col items-center w-full gap-2"
                    >
                      <CalendarFold />
                      <p className="font-medium text-sm">Add Events</p>
                    </Link>
                  </li>
                  <li className="border border-slate-300 rounded-md px-5 pt-4 pb-3">
                    <Link
                      to="/"
                      className="flex flex-col items-center w-full gap-2"
                    >
                      <Combine />
                      <p className="font-medium text-sm">Add Collaborators</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[30%] border-l border-slate-200 pl-4">
              <h4 className="text-md font-semibold mb-4">Coming Events List</h4>
              <div className="flex flex-col">
                <div className="flex flex-col mb-5">
                  <p className="text-xs font-medium text-slate-900 mb-2">
                    25th Feb 2025
                  </p>
                  <div className="flex flex-col gap-3">
                    {[1, 2].map((item) => (
                      <div
                        className="flex border border-slate-300 p-3 rounded-md shadow items-center relative overflow-hidden"
                        key={item}
                      >
                        <div className="flex flex-col w-[60px] h-[60px] items-center border border-slate-100 bg-slate-100 rounded-md mr-3 gap-0 overflow-hidden">
                          <span className="font-light text-xl text-black w-full text-center py-[4px]">
                            2:00
                          </span>
                          <span className="font-medium text-xs text-white text-center bg-red-600 w-full py-[3px]">
                            PM
                          </span>
                        </div>
                        <div>
                          <h6 className="text-sm font-semibold mb-1 text-slate-600">
                            Perfect Pixels Digital Studio
                          </h6>
                          <p className="text-xs font-medium text-slate-500">
                            <span className="mr-3">Address:</span>
                            <span>456 Park Road, Delhi, NCR</span>
                          </p>
                        </div>
                        <Link
                          to="/"
                          className="absolute w-[50px] h-full top-0 right-0 flex items-center justify-center"
                        >
                          <ChevronRight />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <p className="text-xs font-medium text-slate-900 mb-2">
                    26th Feb 2025
                  </p>
                  <div className="flex flex-col gap-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        className="flex border border-slate-300 p-3 rounded-md shadow items-center relative overflow-hidden"
                        key={item}
                      >
                        <div className="flex flex-col w-[60px] h-[60px] items-center border border-slate-100 bg-slate-100 rounded-md mr-3 gap-0 overflow-hidden">
                          <span className="font-light text-xl text-black w-full text-center py-[4px]">
                            2:00
                          </span>
                          <span className="font-medium text-xs text-white text-center bg-red-600 w-full py-[3px]">
                            PM
                          </span>
                        </div>
                        <div>
                          <h6 className="text-sm font-semibold mb-1 text-slate-600">
                            Perfect Pixels Digital Studio
                          </h6>
                          <p className="text-xs font-medium text-slate-500">
                            <span className="mr-3">Address:</span>
                            <span>456 Park Road, Delhi, NCR</span>
                          </p>
                        </div>
                        <Link
                          to="/"
                          className="absolute w-[50px] h-full top-0 right-0 flex items-center justify-center"
                        >
                          <ChevronRight />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <p className="text-xs font-medium text-slate-900 mb-2">
                    27th Feb 2025
                  </p>
                  <div className="flex flex-col gap-3">
                    {[1].map((item) => (
                      <div
                        className="flex border border-slate-300 p-3 rounded-md shadow items-center relative overflow-hidden"
                        key={item}
                      >
                        <div className="flex flex-col w-[60px] h-[60px] items-center border border-slate-100 bg-slate-100 rounded-md mr-3 gap-0 overflow-hidden">
                          <span className="font-light text-xl text-black w-full text-center py-[4px]">
                            2:00
                          </span>
                          <span className="font-medium text-xs text-white text-center bg-red-600 w-full py-[3px]">
                            PM
                          </span>
                        </div>
                        <div>
                          <h6 className="text-sm font-semibold mb-1 text-slate-600">
                            Perfect Pixels Digital Studio
                          </h6>
                          <p className="text-xs font-medium text-slate-500">
                            <span className="mr-3">Address:</span>
                            <span>456 Park Road, Delhi, NCR</span>
                          </p>
                        </div>
                        <Link
                          to="/"
                          className="absolute w-[50px] h-full top-0 right-0 flex items-center justify-center"
                        >
                          <ChevronRight />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
