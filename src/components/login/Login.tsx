import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { sendErrorMsg, sendSuccessMsg } from "../../interfaces/feedback";
import User from "../../interfaces/User";
import { checkUser } from "../../services/userServices";

interface LoginProps {
  logUser: Function;
}

const Login: FunctionComponent<LoginProps> = ({ logUser }) => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().min(2),
      password: yup.string().min(10).max(10).required(),
    }),
    onSubmit: (values: User) => {
      checkUser(values)
        .then(() => sendSuccessMsg("Logged in"))
        .catch((err) => {
          sendErrorMsg("Error");
          console.log(err);
        });
      //logUser(true);
      //navigate("/");
    },
  });
  return (
    <>
      <div className="container col-md-3">
        <h6 className="display-6">Login</h6>
        <form onSubmit={formik.handleSubmit}>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 mt-5"
            disabled={!formik.isValid || !formik.dirty}
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary w-100 mt-1"
        >
          Back
        </button>
        <p className="mt-1">
          You dont have an account? <Link to="/Register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
