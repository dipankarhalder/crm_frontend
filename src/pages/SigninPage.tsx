import { AuthLayout } from "@/layouts/AuthLayout";
import { AuthLogo } from "@/components/elements/auth/AuthLogo";
import { SigninForm } from "@/components/elements/auth/SigninForm";
import { SigninLink } from "@/components/elements/auth/SigninLink";

export const SigninPage = () => {
  return (
    <AuthLayout>
      <div className="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[460px] py-12 px-8 bg-white shadow-2xl rounded-[8px]">
        <div className="flex flex-col text-center mb-6">
          <AuthLogo />
          <h1 className="text-xl font-semibold tracking-tight mb-0">
            Hey there, welcome back!
          </h1>
        </div>
        <div className="grid gap-6">
          <SigninForm />
          <SigninLink />
        </div>
      </div>
    </AuthLayout>
  );
};
