import axios from "axios";
import { toast } from "react-toastify";
import Customer from "../interfaces/Customer";
const CUSTOMERS_API = "http://localhost:8000/customers";

//@desc get all customers
//GET api/customers
export const getAll = () => {
  return toast.promise(axios.get(CUSTOMERS_API), {
    pending: "Loading customers",
    success: "Finished Loading customers",
    error: "error",
  });
};

//@desc get specific customer
//GET CUSTOMERS_API/customers
export const getCustomerById = (id: number) => {
  return toast.promise(axios.get(`${CUSTOMERS_API}/${id}`), {
    pending: "Loading customer",
    success: "Finished Loading customer",
    error: "error",
  });
};

//@desc adds new customer
// POST CUSTOMERS_API/customers  axios.post(CUSTOMERS_API, customer);
export const addCustomer = (customer: Customer) => {
  return toast.promise(axios.post(CUSTOMERS_API, customer), {
    pending: "Adding customer",
    success: "Finished adding customer",
    error: "error",
  });
};

//@desc update existing customer
// PUT CUSTOMERS_API/customers axios.put(`${CUSTOMERS_API}/${id}`, customer);
export const updateCustomerById = (id: number, customer: Customer) => {
  return toast.promise(axios.put(`${CUSTOMERS_API}/${id}`, customer), {
    pending: "Updating customer",
    success: "Finished updating customer",
    error: "error",
  });
};

//@desc delete customer
// DELETE CUSTOMERS_API/customers axios.delete(`${CUSTOMERS_API}/${id}`)
export const deleteCustomerById = (id?: number) => {
  return toast.promise(axios.delete(`${CUSTOMERS_API}/${id}`), {
    pending: "Deleting customer",
    success: "Finished deleting customer",
    error: "error",
  });
};
