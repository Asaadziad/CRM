import { FunctionComponent, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/add/Add";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
import UpdateCustomer from "./components/update/UpdateCustomer";
import { ToastContainer } from "react-toastify";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Header from "./components/Header";

interface RouteSwitchProps {}

const RouteSwitch: FunctionComponent<RouteSwitchProps> = () => {
  const [userLogged, setUserLogged] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {userLogged ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/Add" element={<Add />} />
            <Route path="/Update">
              <Route path=":customerId" element={<UpdateCustomer />} />
            </Route>
          </>
        ) : (
          <Route path="*" element={<Login logUser={setUserLogged} />} />
        )}

        <Route
          path="/Register"
          element={<Register logUser={setUserLogged} />}
        />
      </Routes>
      <ToastContainer theme="light" />
    </BrowserRouter>
  );
};

export default RouteSwitch;
