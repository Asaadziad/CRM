import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1>
            <i className="fa-solid fa-address-card"></i> CRM
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
