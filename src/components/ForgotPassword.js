import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlReset = () => {
        console.log("Hi");
        navigate("/");
    }
    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Reset Password</h3>
                    <div className="card-text">
                        <form onSubmit={handlReset}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input className="form-control"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input className="form-control"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                        </form>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;