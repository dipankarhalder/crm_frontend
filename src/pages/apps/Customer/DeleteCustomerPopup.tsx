import { Trash2 } from "lucide-react";
import { useConsumerStore } from "@/store/consumerStore";

export const DeleteCustomerPopup = () => {
  const { setDeleteTogglePopup } = useConsumerStore();

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[99] flex justify-center items-center">
      <div className="bg-white px-8 py-[60px] w-[420px] z-[2] rounded-md">
        <div className="flex flex-col items-center">
          <span className="w-[90px] h-[90px] rounded-full bg-slate-100 flex justify-center items-center mb-8">
            <Trash2 className="w-[50px] h-[50px] text-red-500" />
          </span>
          <p className="text-md font-medium text-slate-700">
            Are you sure you want to delete this item?
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <span
            className="px-4 py-2 bg-red-700 text-xs text-white font-medium rounded-md cursor-pointer hover:bg-red-900 transition ease-in-out"
            onClick={() => console.log("dskjfbjksd")}
          >
            Delete
          </span>
          <span
            className="px-4 py-2 bg-slate-300 text-xs text-black font-medium rounded-md cursor-pointer hover:bg-slate-400 transition ease-in-out"
            onClick={() => setDeleteTogglePopup(false)}
          >
            Cancel
          </span>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex w-full h-screen bg-black opacity-[.86]"></div>
    </div>
  );
};
