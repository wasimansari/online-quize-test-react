import { Outlet } from "react-router-dom";
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
  const isChildRoute = location.pathname !== "/dashboard";
  const [user,setUser]=useState(null);
  const [loginStatus, setLoginStatus] = useState(localStorage.getItem('isLoggedIn'))
  const firebase= useFirebase();


  useEffect(() => {
    firebase.onAuthStateChange();
    $("#myButton").click(() => {
      alert("Button clicked using jQuery!");
    });
  }, []);

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       console.log("You are logged in",user);
  //       setUser(user);
  //   }else{
  //       console.log("You are not logged in",user)
  //       setUser(null);
  //   }
  //   })
  // },[])
  const headingStyle = {
    width: "100%",
    margin: "-23px 0 0 0",
    padding: "0",
    backgroundColor: "cyan",
  };
  // const userStatus=  localStorage.getItem('isLoggedIn');

  const handleLogin=()=>{
    //loginStatus ? setLoginStatus(localStorage.setItem('isLoggedIn',false)): setLoginStatus(localStorage.setItem('isLoggedIn',true))

    //console.log(userStatus)
  }

  return (
    <div className="wrapper d-flex align-items-stretch">
      <Navigation />

      <div id="content" className="mt-4 pl-0">
        <div style={headingStyle} className="shadow-sm p-2 bg-white rounded">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                < FontAwesomeIcon icon="fa-circle" style={{color: onlineStatus ? "green" : "red",fontSize:"10px"}} />
                {
                  onlineStatus?<span className="ml-1">Online</span>:<span className="ml-1">Offline</span>
                }
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon="fa-user"/> <span>User Name : </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogin}>
                {
                  user ? "Logout" : "Login"
                }
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
