// import { AuthLayout } from "@/layouts/AuthLayout";
import { SigninForm } from "@/components/elements/auth/SigninForm";
import { SigninLink } from "@/components/elements/auth/SigninLink";

export const SigninPage = () => {
  return (
    // <AuthLayout heading={"Hey there, welcome back!"}>
    <div className="grid gap-6">
      <SigninForm />
      <SigninLink />
    </div>
    // </AuthLayout>
  );
};
