import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/editprofile">Edit Profile</Link>
        </li>
        <li>
          <Link to="/addexperience">Add Experience</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
