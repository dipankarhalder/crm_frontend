import { IChildren } from "@/interface";

export const AuthLayout = ({ children }: IChildren) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
};
