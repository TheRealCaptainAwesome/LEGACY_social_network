import React from "react";
import "./Footer.css";

export default () => {
  return (
    <footer>
      <span>
        Copyright &copy; {new Date().getFullYear()} - Jonas Stiernstrom{" "}
      </span>
    </footer>
  );
};
