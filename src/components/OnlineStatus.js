import React,{useEffect, useState} from "react";


const OnlineStatus=()=>{
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false);
        });
        window.addEventListener("online",()=>{
            setStatus(true);
        })
    },[]);

    return status;
}

export default OnlineStatus;