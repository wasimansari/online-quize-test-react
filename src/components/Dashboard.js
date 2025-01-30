import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useLocation } from "react-router-dom";
import OnlineStatus from "./OnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFirebase } from "../context/Firebase";
import Registration from "./Registration";
import { database } from "../context/Firebase";
import { ref,get } from "../context/Firebase";
import Card from "../utills/Card";

const Dashboard = () => {
  const location = useLocation();
  const onlineStatus = OnlineStatus();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const isChildRoute = location.pathname !== "/dashboard";
  const isAdminRoute = location.pathname == "/dashboard";
  const { loginStatus, handleLogout } = useFirebase();
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const getNameFromEmail = (email)=> {
    const username = email.split('@')[0];
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    return name;
  }


  useEffect(() => {
    $("#myButton").click(() => {
      alert("Button clicked using jQuery!");
    });
  setUserName(getNameFromEmail(loginStatus.email));
  setIsRegistrationVisible(false)
  }, [loginStatus.email]);

  useEffect(() => {
    const fetchRegistrationData = async () => {
      try {
        const usersRef = ref(database, 'registrations/');
        const snapshot = await get(usersRef);

        if (snapshot.exists()) {
          setRegistrationData(snapshot.val());
          console.log("Fetched data:", snapshot.val());
          console.log("fetched registration : ",registrationData)
        } else {
          console.log("No registration data found.");
        }
      } catch (error) {
        console.error("Error fetching registration data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistrationData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!registrationData) {
    return <div>No data available</div>;
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
    }
  };
  const handleRegistration = (value)=>{
    setIsRegistrationVisible(value);
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
        {isAdminRoute &&  (
            isRegistrationVisible ? (<Registration onValueChange={{handleRegistration,isRegistrationVisible}} />) : (<Card onSelect={handleRegistration}/>) //<h4 className="d-flex justify-content-center align-items-center"> Befor online test you should registration first:  <button className="btn btn-primary" onClick={handleRegistration}>Registration</button></h4>)
           
          )}
          {/* <Card/> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
