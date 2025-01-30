import { Link } from "react-router-dom";
import { AuthLayout } from "@/layouts/AuthLayout";
import { SignupForm } from "@/components/elements/auth/SignupForm";

export const SignupPage = () => {
  return (
    <AuthLayout heading={"Create your account"}>
      <div className="grid gap-6">
        <SignupForm />
        <div className="text-center text-sm mt-2">
          <p>
            If you have already account. &nbsp;
            <Link
              to={"/"}
              className="font-medium underline hover:text-indigo-700"
            >
              Sign in now
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};
