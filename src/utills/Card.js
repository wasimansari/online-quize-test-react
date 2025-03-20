import React, { useState } from "react";
import register from '../images/register.jpg';
import { studentClassList } from "./data";
import { useFirebase } from "../context/Firebase";
const Card = ({onSelect}) => {
    const {isHomeClick,setIsHomeClick} = useFirebase();
    const [studentClass,setStudentClass] = useState();
    const divStyle = {
        backgroundImage: `url(${register})`,
        height: '150px',
        backgroundSize: '100%'
    };
    const handleCard = ()=>{
        setStudentClass(studentClass);
        onSelect([true,studentClass]);
        if(isHomeClick){
            setIsHomeClick((prev) => !prev);
        }
    }
    return (
            <div className="col-md-4">
                <div className="card m-1" style={{ width: "18rem" }}>
                    <img className="card-img-top" style={divStyle} />
                    <div className="card-body p-2">
                        <h5 className="card-title">Student Registration</h5>
                        <p className="card-text">First time student need to register first then proceed for online test</p>
                        <select name="studentClass" className="form-control" vlaue={studentClass} onChange={(e)=>setStudentClass(e.target.value)}>
                            <option value="">Student Class</option>
                            {
                                studentClassList.map((sClass,index)=>(
                                    <option key={index} value={sClass}>{sClass}</option>
                                ))
                            }
                        </select>
                        <button className="btn btn-primary mt-2" disabled={!studentClass} onClick={handleCard}>Registration</button>
                    </div>
                </div>
            </div>
    )
}
export default Card;