import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Customer from "../../interfaces/Customer";
import { addCustomer } from "../../services/customerService";

interface AddProps {}

const Add: FunctionComponent<AddProps> = () => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required().min(2),
      lastName: yup.string().required().min(2),
      phone: yup.string().min(10).max(10).required(),
      email: yup.string().email().required().min(5),
    }),
    onSubmit: (values: Customer) => {
      addCustomer(values);
      navigate("/");
    },
  });
  return (
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
            placeholder="Enter first name"
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
            placeholder="last name"
            name="lastName"
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
            placeholder="Email"
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
            placeholder="Phone number"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-danger">{formik.errors.phone}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-5">
          Add
        </button>
      </form>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary w-100 mt-1"
      >
        Back
      </button>
    </div>
  );
};

export default Add;
