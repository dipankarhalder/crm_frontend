import { Baby } from "lucide-react";

export const AuthLogo = () => {
  return (
    <div className="flex justify-center items-center mb-4">
      <span className="flex justify-center items-center w-[40px] h-[40px] bg-indigo-600 rounded-full">
        <Baby size={28} className="text-white" />
      </span>
      <p className="ml-2 font-bold text-3xl text-indigo-600">Pushify</p>
    </div>
  );
};
