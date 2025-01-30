import { AuthLayout } from "@/layouts/AuthLayout";
import { SignupForm } from "@/components/elements/auth/SignupForm";

export const SignupPage = () => {
  return (
    <AuthLayout heading={"Create your account"}>
      <div className="grid gap-6">
        <SignupForm />
      </div>
    </AuthLayout>
  );
};
