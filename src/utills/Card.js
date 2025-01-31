import React, { useState } from "react";
import register from '../images/register.jpg';
const Card = ({onSelect}) => {
    const [studentClass,setStudentClass] = useState();
    const divStyle = {
        backgroundImage: `url(${register})`,
        height: '150px',
        backgroundSize: '100%'
    };
    console.log("card",onSelect);
    const handleCard = ()=>{
        setStudentClass(studentClass);
        onSelect([true,studentClass]);
    }
    return (
            <div className="col-md-3">
                <div className="card m-1" style={{ width: "18rem" }}>
                    <img className="card-img-top" style={divStyle} />
                    <div className="card-body p-2">
                        <h5 className="card-title">Student Registration</h5>
                        <p className="card-text">First time student need to register first then proceed for online test</p>
                        <select name="studentClass" className="form-control" vlaue={studentClass} onChange={(e)=>setStudentClass(e.target.value)}>
                            <option value="">Student Class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="1">4</option>
                            <option value="2">5</option>
                            <option value="3">6</option>
                        </select>
                        <button className="btn btn-primary mt-2" onClick={handleCard}>Registration</button>
                    </div>
                </div>
            </div>
    )
}
export default Card;