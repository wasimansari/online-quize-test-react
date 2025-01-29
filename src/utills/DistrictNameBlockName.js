import React, { useState } from "react";
import { districtDetails, blockDetails } from "./district";
import Block from "./Block";
import { Field } from "formik";

const DistrictNameBlockName = React.memo(({ selectedState,onDistrictChange }) => {
  // console.log(bloackDetails.blockName);
  const [district, setDistrict] = useState();
  // const handleDistrict = (e)=>{
  //   const values = e.tartget.value;
  //   console.log(values);
  // }

  // if (Array.isArray(selectedState) && selectedState[1]) {
  //   const searchedBlockName = blockDetails.blockName.filter((bName) => bName.districtName === selectedState[1]);
  //   console.log("Searched Block Name", searchedBlockName);
  // }

  return (
    <>
      <div className="col-md-6 mb-2">
        <Field as="select" name="district" className="form-control" onChange={onDistrictChange}>
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
      </div>
      

    </>
  );
});

export default DistrictNameBlockName;
