import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useFirebase } from "../context/Firebase";


const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const navigate = useNavigate();
    const firebase = useFirebase();

    const handleSignup = async(e)=>{
        e.preventDefault();
        try
        {
            await firebase.signupUserWithEmailAndPassword(email,password);
            alert('User signed up successfully!');
            navigate("/");
        }catch (error) {
            console.error('Error signing up:', error.message);
            alert(error.message);
          }

    }
    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">SignUp</h3>
                    <div className="card-text">
                        <form onSubmit={handleSignup}>
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputName">Enter Name</label>
                                <input className="form-control"
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </div> */}
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputfName">Enter Date of Birth</label>
                                <input className="form-control"
                                    type="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required
                                />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Enter Email</label>
                                <input className="form-control"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputpass">Enter Password</label>
                                <input className="form-control"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-primary btn-block">SignUp</button>

                            <div className="sign-up">
                                Have already an account? Login here <Link to="/">SignIn</Link>
                            </div>
                        </form>
                        {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;