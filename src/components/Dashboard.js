import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useLocation } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFirebase } from "../context/Firebase";

const Dashboard = () => {
  const location = useLocation();
  const onlineStatus = OnlineStatus();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  let isChildRoute = location.pathname !== "/dashboard";
  const { loginStatus, handleLogout } = useFirebase();
  console.log('dashboad login', loginStatus.email);
  useEffect(() => {
    $("#myButton").click(() => {
      alert("Button clicked using jQuery!");
    });
  setUserName(getNameFromEmail(loginStatus.email))
  }, [loginStatus.email]);

  const getNameFromEmail = (email)=> {
    const username = email.split('@')[0];
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    return name;
  }

  const headingStyle = {
    width: "100%",
    margin: "-23px 0 0 0",
    padding: "0",
    backgroundColor: "cyan",
  };
  const handleLogin = () => {
    if (loginStatus) {
      handleLogout();
      if (!isChildRoute) {
        navigate("/", { replace: true });
      }
    } else {
      
      console.log("Redirecting to login...");
      // Add logic to redirect to login page if necessary
    }
  };

  return (
    <div className="wrapper d-flex align-items-stretch">
      <Navigation />

      <div id="content" className="mt-4 pl-0">
        <div style={headingStyle} className="shadow-sm p-2 bg-white rounded">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <FontAwesomeIcon
                  icon="fa-circle"
                  style={{
                    color: onlineStatus ? "green" : "red",
                    fontSize: "10px",
                  }}
                />
                {onlineStatus ? (
                  <span className="ml-1">Online</span>
                ) : (
                  <span className="ml-1">Offline</span>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon="fa-user" /> <span>User Name : {userName} </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="javascript:void(0)"
                onClick={handleLogin}
              >
                {loginStatus ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
        </div>
        {!isChildRoute && <Home status={onlineStatus} />}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
