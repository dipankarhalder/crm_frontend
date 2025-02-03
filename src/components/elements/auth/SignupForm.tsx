import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

import { IUserRequest } from "@/interface";
import { SignupSchema } from "@/validate";
import { applinks } from "@/router/links";
import { Spinner } from "@/components/elements/spinner";
import { registerUser } from "@/services/auth.services";

export const SignupForm = () => {
  const userType = [
    { title: "Super User", value: "super_admin" },
    { title: "Collaborator", value: "collaborator" },
    { title: "Staff", value: "staff" },
  ];

  const { toast } = useToast();
  const navigate = useNavigate();
  const [waiting, setWaiting] = useState(false);

  /* handle form data */
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      role: "staff",
      email: "",
      phone: "",
      password: "",
    },
  });

  /* handle submit */
  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    setWaiting(true);
    const payload: IUserRequest = { ...data };
    registerUser(payload)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: any) => {
        if (res.status === 200) {
          toast({ title: res.message, variant: "success" });
          navigate(applinks.login);
        } else {
          toast({ title: res.response.data.message, variant: "failed" });
        }
        setWaiting(false);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        toast({ title: error.message, variant: "failed" });
        setWaiting(false);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center justify-center"
                  >
                    {userType.map((user) => (
                      <div className="flex items-center mr-5" key={user.value}>
                        <RadioGroupItem value={user.value} id={user.value} />
                        <label
                          htmlFor={user.value}
                          className="font-medium text-sm text-slate-500 ml-2"
                        >
                          {user.title}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} className="h-12 px-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone no."
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    className="h-12 px-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {waiting ? (
          <div className="w-full bg-gray-400 h-11 flex items-center justify-center rounded-md">
            <Spinner />
            <p className="font-medium text-white text-sm ml-2">
              Please wait...
            </p>
          </div>
        ) : (
          <Button
            className="w-full h-11 text-sm bg-indigo-600 hover:bg-indigo-700"
            type="submit"
          >
            Register
          </Button>
        )}
      </form>
    </Form>
  );
};
