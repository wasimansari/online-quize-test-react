import React from "react";
import { blockDetails } from "./district";
import { Field } from "formik";

const Block = ({ state,district }) => {
    if(!state || !district) return null;

    const filterData = blockDetails.blockName.filter(data=>data.districtName.toLowerCase().trim() === district.toLowerCase().trim());
    console.log("block",blockDetails.blockName);
    console.log("filter Data :",filterData)
    const item = filterData.map(data=>data.blockName)
    console.log("filter item:",item);
    return (
        <div className="col-md-6 mb-2">
            <Field as="select" name="block" className="form-control">
                <option value="">Select Block</option>
                {
                    filterData.map((block)=>{
                        return <option key={block.blockId}>{block.blockName}</option>;
                    })
                }
            </Field>
            {/* <ErrorMessage name="block" component="div" style={{ color: "red", fontSize: "11px" }} /> */}
        </div>
    )
}

export default Block;

