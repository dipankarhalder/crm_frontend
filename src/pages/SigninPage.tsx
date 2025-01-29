import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/layouts/AuthLayout";
import { SigninComponent } from "@/components/elements/signin";

export const SigninPage = () => {
  return (
    <AuthLayout>
      <SigninComponent />
      <Button>Click me</Button>
    </AuthLayout>
  );
};
