
import React, {useState} from "react";
import '../css/home.css';
import { Outlet } from "react-router-dom";
import Registration from "./Registration";
import { useFirebase } from "../context/Firebase";
const Home = ({ status }) => {
    return (
        <div>
            <h4 className="pt-3 pl-3 d-flex justify-content-center align-items-center">Welcome to the Online Test Quiz</h4>
        </div>
    )
}

export default Home;