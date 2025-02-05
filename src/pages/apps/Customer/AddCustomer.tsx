import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useConsumerStore } from "@/store/consumerStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { applinks } from "@/router/links";

export const AddCustomer = () => {
  const { setNewConsumer, setToggleConsPopup } = useConsumerStore();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  const onSubmit = (data: any) => {
    const payload = { ...data };
    setNewConsumer(payload);
    setToggleConsPopup(true);
  };

  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center px-[22rem] w-full mb-6">
        <h1 className="font-medium mr-8 text-base text-black">
          <Link to={applinks.customers} className="flex items-center">
            <ArrowLeft className="mr-5 w-5 h-5" /> Add Customer
          </Link>
        </h1>
      </div>
      <div className="flex flex-col items-center pb-4 px-[22rem] w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex w-full mt-6 mb-4">
              <div className="w-[25%]">
                <p className="text-xs mb-2 font-medium text-slate-500">
                  Personal Information
                </p>
              </div>
              <div className="w-[75%]">
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
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
                            placeholder="you@example.com"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
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
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-[25%]">
                <p className="text-xs mb-2 font-medium text-slate-500">
                  Address Information
                </p>
              </div>
              <div className="w-[75%]">
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="landmark"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Landmark"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Area"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="City"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="State"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-8">
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Pincode"
                            {...field}
                            className="h-12 px-5"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  className="w-auto text-sm bg-indigo-600 hover:bg-indigo-700"
                  type="submit"
                >
                  Yes, I want
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
