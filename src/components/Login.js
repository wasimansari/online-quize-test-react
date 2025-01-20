import React, { useState } from "react";
import '../css/login.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useFirebase } from "../context/Firebase";

const Login = () => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [error, setError] = useState('');
const navigate = useNavigate();
const firebase = useFirebase();
    const handleLogin = async(e)=>{
        e.preventDefault();
        try
        {
            await firebase.signInUserWithEmailAndPassword(email,password);
            alert('User signed In successfully!');
            navigate('/dashboard');
        }catch (error) {
            console.error('Error signing up:', error.message);
            alert(error.message);
          }

    }

    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Login Dashboad</h3>
                    <div className="card-text">
                        <form onSubmit={handleLogin}>
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
                                <a href="#" style={{ float: 'right', fontSize: '12px' }}>Forgot password?</a>
                                <input className="form-control"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign in</button>

                            <div className="sign-up">
                                Don't have an account? <Link to="signup">SignUp</Link>
                            </div>
                        </form>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;