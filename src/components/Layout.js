import React from "react";

import Header from "./Header";
import "../styles/Layout.css";
import img from "../images/cut2.jpg";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
