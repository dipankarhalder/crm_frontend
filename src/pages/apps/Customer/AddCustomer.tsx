import { useParams } from "react-router";

export const AddCustomer = () => {
  const params = useParams();

  return <div>{params.id ? `Edit Customer ${params.id}` : "Add Customer"}</div>;
};
