import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface UpdateCustomerProps {}

const UpdateCustomer: FunctionComponent<UpdateCustomerProps> = () => {
  let { customerId } = useParams();
  return <>{customerId}</>;
};

export default UpdateCustomer;
