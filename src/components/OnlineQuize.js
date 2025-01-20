import React from "react";
import { useNavigate } from "react-router-dom";
const OnlineQuize = () => {

    const navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate("/dashboard/question")
    }
    return (
        <div className="container">
            <div className="col-md-12">
                <h2>Online Test/Quiz Rules for Students</h2>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ol>
                        <li className="font-weight-bold">
                            Read the Instructions Carefully
                            <p className="font-weight-normal mb-0">Before starting the test, make sure you read all the instructions. Understand how much time you have, what kind of questions to expect, and how to submit your answers.</p>
                        </li>
                        <li className="font-weight-bold">
                            Manage Your Time
                            <p className="font-weight-normal mb-0">Keep an eye on the clock! You may have a limited amount of time to finish the test. Make sure you pace yourself and don’t spend too long on any one question.</p>
                        </li>
                        <li className="font-weight-bold">
                            Answer Honestly
                            <p className="font-weight-normal mb-0">This test is to check your knowledge, so do your best! Don’t use outside help (like asking others or searching the internet). Trust what you’ve learned</p>
                        </li>
                        <li className="font-weight-bold">
                            Stay Focused
                            <p className="font-weight-normal mb-0">Once you start the test, try not to get distracted. Don’t switch tabs or open other apps while taking the quiz, as this might be flagged by the system.</p>
                        </li>
                        <li className="font-weight-bold">
                            Submit on Time
                            <p className="font-weight-normal mb-0">Make sure to submit your quiz before the time runs out. If you’re unsure about any questions, try to make your best guess before the clock runs out.</p>
                        </li>
                    </ol>
                    <div  className="row">
                        <div className="col-md-4">
                    <select class="custom-select" id="inputGroupSelect04">
                    <option selected>Choose Class</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div className="col-md-4">
                    <select class="custom-select" id="inputGroupSelect04">
                    <option selected>Choose Subject</option>
                    <option value="1">Math</option>
                    <option value="2">Science</option>
                    <option value="3">Hindi</option>
                </select>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineQuize;