import React, { useContext } from "react";
import { MyContext } from "./Contexts";

const SubCat = (props) => {
  const {
    testName,
    setTestName,
    price,
    setPrice,
    unit,
    setUnit,
    refValue,
    setRefValue,
  } = useContext(MyContext);
  return (
    <div className="formrow">
      <label htmlFor="">{props.data.label}</label>
      <div className="input">
        <input
          type={props.data.type}
          onChange={
            props.data.label === "Name of test"
              ? (e) => setTestName(e.target.value)
              : props.data.label === "Price"
              ? (e) => setPrice(e.target.value)
              : props.data.label === "Reference Value"
              ? (e) => setRefValue(e.target.value)
              : (e) => setUnit(e.target.value)
          }
          value={
            props.data.label === "Name of test"
              ? testName
              : props.data.label === "Price"
              ? (price===0 ? "" :price)
              : props.data.label === "Reference Value"
              ? refValue
              : unit
          }
          placeholder={props.data.placeholder}
        />
      </div>
    </div>
  );
};

export default SubCat;
