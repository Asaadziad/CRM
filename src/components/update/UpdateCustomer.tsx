import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import Customer from "../../interfaces/Customer";
import {
  getCustomerById,
  updateCustomerById,
} from "../../services/customerService";

interface UpdateCustomerProps {}

const UpdateCustomer: FunctionComponent<UpdateCustomerProps> = () => {
  let { customerId } = useParams();
  let navigate = useNavigate();

  let [customerData, setCustomerData] = useState<Customer>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    getCustomerById(parseInt(customerId as string))
      .then((res) => setCustomerData(res.data))
      .catch((err) => console.log(err));
  }, []);
  let formik = useFormik({
    initialValues: {
      firstName: customerData.firstName,
      lastName: customerData.lastName,
      email: customerData.email,
      phone: customerData.phone,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      firstName: yup.string().required().min(2),
      lastName: yup.string().required().min(2),
      phone: yup.string().min(10).max(10).required(),
      email: yup.string().email().required().min(5),
    }),
    onSubmit: (values: Customer) => {
      updateCustomerById(parseInt(customerId as string), values).then((res) => {
        console.log("good");
        navigate("/");
      });
    },
  });

  return (
    <>
      <div className="container col-md-3">
        <h6 className="display-6">New customer</h6>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-danger">{formik.errors.firstName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formik.initialValues.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-danger">{formik.errors.lastName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-danger">{formik.errors.phone}</p>
            )}
          </div>
          <button type="submit" className="btn btn-warning w-100 mt-5">
            Update
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary w-100 mt-1"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default UpdateCustomer;
