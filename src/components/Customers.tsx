import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Customer from "../interfaces/Customer";
import { deleteCustomerById, getAll } from "../services/customerService";

interface CustomersProps {}

const Customers: FunctionComponent<CustomersProps> = () => {
  const [customers, setCustomers] = useState<Array<Customer>>([]);
  let navigate = useNavigate();
  useEffect(() => {
    getAll()
      .then((res) => setCustomers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {customers.length > 0 ? (
        <table className="table">
          <caption>Customers list</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Link
                    to={`/Update/${item.id}`}
                    className="btn btn-warning text-light"
                  >
                    <i className="fa fa-user-pen"></i>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteCustomerById(item.id);
                      getAll().then((res) => setCustomers(res.data));
                    }}
                    className="btn btn-danger"
                  >
                    <i className="fa fa-user-xmark"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>There's no customers</p>
      )}
    </>
  );
};

export default Customers;
