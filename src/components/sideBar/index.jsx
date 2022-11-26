import React from "react";
import { Link } from "react-router-dom";
import { Home, HomeWork, People, Person, LocalShipping} from "@material-ui/icons";
import "../common/mediaqueries/style.scss"
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="bg-mask-wrapper">
       <div className="side-bar-wrapper">
      <ul>
        <li>
          <a>
            <Home className="side-bar-icon" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/work-order">
            <HomeWork className="side-bar-icon" />
            Work Orders
          </a>
        </li>
        <li>
          <a>
            <People className="side-bar-icon" />
            Customer
          </a>
        </li>
        <li>
          <a>
            <Person className="side-bar-icon" />
            User
          </a>
        </li>
        <li>
          <a>
            <LocalShipping className="side-bar-icon" />
            Vehicles
          </a>
        </li>
        
      </ul>
    </div>
    </div>
   
  );
};

export default Sidebar;
