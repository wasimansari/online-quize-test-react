import React, { useState } from "react";
import { districtDetails, blockDetails } from "./district";
import Block from "./Block";
import { Field } from "formik";

const DistrictNameBlockName = React.memo(({ selectedState,onDistrictChange }) => {
  const [district, setDistrict] = useState();
  return (
    <>
      {/* <div className="col-md-6 mb-2"> */}
        <Field as="select" name="district" className="form-control" value={district} onChange={onDistrictChange}>
          <option value="">Select District</option>
          {selectedState === "Bihar" &&
            districtDetails.Bihar.map((dist) => (
          <option
            key={dist.districtId}
            value={dist.districtName}
            
          >
            {dist.districtName}
          </option>
        ))}  
        </Field>
        
        {/* <ErrorMessage name="city" component="div" style={{ color: "red", fontSize: "11px" }} /> */}
      {/* </div> */}
      

    </>
  );
});

export default DistrictNameBlockName;
