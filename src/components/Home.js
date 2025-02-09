
import React, {useEffect, useState} from "react";
import '../css/home.css';
import { useFirebase } from "../context/Firebase";
import { useLocation, useNavigationType } from "react-router-dom";
const Home = ({ status }) => {
    const { handleCancel,isHomeClick,setIsHomeClick }  = useFirebase();
    console.log("on home page",status)
    const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
    const navigationType = useNavigationType();
    const location = useLocation();
    console.log("before isHomeClick toggled in Home:", isHomeClick);
    useEffect(()=>{
        if (navigationType === "REPLACE") {
            setIsHomeClick((prev) => !prev);
            console.log("isHomeClick toggled in Home:", isHomeClick);
          }
    },[navigationType,location.key])

    useEffect(() => {
        console.log("✅ Updated isHomeClick in Home:", isHomeClick);
    }, [isHomeClick]);


    return (
        <div>
            <h4 className="pt-3 pl-3 d-flex justify-content-center align-items-center">Welcome to the Online Test Quiz</h4>
        </div>
    )
}

export default Home;