import { IChildren } from "@/interface";

export const AuthLayout = ({ children }: IChildren) => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-blue-50">
      <div className="fixed top-0 right-0 h-screen w-[56%] bg-indigo-600"></div>
      <div className="relative">{children}</div>
    </section>
  );
};
