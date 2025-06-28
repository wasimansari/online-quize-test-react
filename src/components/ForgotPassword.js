import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    const response = await firebase.forgotPassword(email);
    setMessage(response);
    navigate("/");
  };
  // const handlReset = () => {
  //     console.log("Hi");
  //     navigate("/");
  // }
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Reset Password</h3>
          <div className="card-text">
            {/* <form onSubmit={handlReset}> */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                {/* <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /> */}
              <button onClick={handleResetPassword} className="btn btn-primary btn-block">
                Reset Password
              </button>
              <p>{message}</p>
              </div>
            {/* </form> */}
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;