
import React from "react";
const Home = ({status}) => {
    return (
        <div>
            {
                status ? "":<p>Offline</p>
            }
       <h1>Home</h1>
       </div>
    )
}

export default Home;