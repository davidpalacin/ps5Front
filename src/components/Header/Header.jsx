import React from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

export function Header() {
  let activeClassName = "active-link";

  return (
    <div>
      <Navbar />
    </div>
  );
}
