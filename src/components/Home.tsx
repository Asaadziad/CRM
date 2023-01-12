import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Customers from "./Customers";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="container d-flex justify-content-center">
          <Link to="/add" className="btn btn-success">
            Add +
          </Link>
        </div>

        <Customers />
      </div>
    </>
  );
};

export default Home;
