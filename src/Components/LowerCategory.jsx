import React, { useContext } from "react";
import SubCatForm from "../Data/SubCatForm";
import Dropdown from "./Dropdown";
import SubCat from "./SubCat";
import axios from "axios";
import {  toast } from "react-toastify";
import { MyContext } from "./Contexts";

const LowerCategory = () => {
  const {
    tableRender,
    setTableRender,
    select,
    testName,
    price,
    unit,
    refValue,
    setTestName,
    setPrice,
    setUnit,
    setRefValue,
  } = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      select !== "" &&
      testName !== "" &&
      price !== "" &&
      unit !== "" &&
      refValue !== ""
    ) {
      try {
        await axios
          .post("http://localhost:4001/enter", {
            Category: select,
            Testname: testName,
            Price: price,
            RefValue: refValue,
            Unit: unit,
          })
          .then((response) => {
            console.log("Response 58=>", response);
            setTableRender(tableRender + 1);
            setTestName("");
            setPrice(0);
            setUnit("");
            setRefValue("");
          });

        toast.success("Sub-Category Added Successfully !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("All Fields are Mandatory");
    }
  };

  const categoryStr = localStorage.getItem("category") || "[]";
  const category = JSON.parse(categoryStr);

  return (
    <>
      <form>
        <div className="upper-left">
          <div className="ul1">Add SubCategory</div>
          <div className="ul2">
            {SubCatForm.map((item, index) => {
              return item.type === "select" ? (
                <Dropdown key={index} category={category} />
              ) : (
                <SubCat data={item} key={index} />
              );
            })}
          </div>
          <div className="ul3">
            <button className="add" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LowerCategory;
