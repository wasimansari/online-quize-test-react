import React, { useState } from "react";
import { districtDetails,bloackDetails } from "./district";

const DistrictNameBlockName = React.memo(({ selectedState }) => {
  console.log(bloackDetails.blockName);
  const [district, setDistrict] = useState();
  const handleDistrict = (e)=>{
    const values = e.tartget.value;
    console.log(values);
  }

  if(Array.isArray(selectedState) && selectedState[1])
  {
    const searchedBlockName = bloackDetails.blockName.filter((bName)=>bName.districtName === selectedState[1])
    console.log("Searched Block Name", searchedBlockName)
  }

  return (
    <>
      {selectedState[0] === "Bihar" &&
        districtDetails.Bihar.map((dist) => (
          <option
            key={dist.districtId}
            value={dist.districtName}
            onChange={(e) => handleDistrict(e)}
          >
            {dist.districtName}
          </option>
        ))}
       
    </>
  );
});

export default DistrictNameBlockName;
