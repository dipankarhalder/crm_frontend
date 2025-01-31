import { useParams } from "react-router";

export const ViewCustomer = () => {
  const params = useParams();

  return <div>View Customer {params.id}</div>;
};
