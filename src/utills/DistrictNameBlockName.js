import React, { useState } from "react";
import { districtDetails,blockDetails } from "./district";
import Block from "./Block";

const DistrictNameBlockName = React.memo(({ selectedState }) => {
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
      {selectedState === "Bihar" &&
        districtDetails.Bihar.map((dist) => (
          <option
            key={dist.districtId}
            value={dist.districtName}
            
          >
            {dist.districtName}
          </option>
        ))}
       
    </>
  );
});

export default DistrictNameBlockName;
