import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/add/Add";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import UpdateCustomer from "./components/update/UpdateCustomer";
import { ToastContainer } from "react-toastify";

interface RouteSwitchProps {}

const RouteSwitch: FunctionComponent<RouteSwitchProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Update">
          <Route path=":customerId" element={<UpdateCustomer />} />
        </Route>
      </Routes>
      <ToastContainer theme="light" />
    </BrowserRouter>
  );
};

export default RouteSwitch;
