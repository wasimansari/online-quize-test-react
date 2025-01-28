import React from "react";
import { blockDetails } from "./district";

const Block = ({selectedDistrict})=>{
    let blockList = [];  // Make sure blockList is initialized as an empty array

// Debugging the selectedDistrict value and blockDetails
console.log("Selected District:", selectedDistrict);


// Iterate over blockDetails.blockName
blockDetails.blockName.forEach(block => {

    
    if (block.districtName === selectedDistrict) {
        console.log("Match found:", block);  // Log when a match is found
        blockList.push(block);
    }
});

// After the loop, check the blockList
console.log("Block List after loop:", blockList);
    return(
        <h1>Hi</h1>
    )
}

export default Block;

