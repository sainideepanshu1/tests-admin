import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "./Contexts";

const Dropdown = () => {
  const [category, setCategory] = useState([]);
  const { renderer, setSelect } = useContext(MyContext);
  const fetchdeepData = async () => {
    try {
      await axios
        .get("http://localhost:4001/categoryenter")
        .then((response) => {
          if (response) {
            console.log("Array for dropdown=>", response.data.data);
            setCategory(response.data.data);
          } else {
            console.log("No Data found");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdeepData();
  }, [renderer]);

  return (
    <>
      <select
        className="dropdown"
        name=""
        id="mySelect"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="">--Select an option--</option>
        {category.map((item) => (
          <option key={item._id} value={item.Entercategory}>
            {item.Entercategory}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
