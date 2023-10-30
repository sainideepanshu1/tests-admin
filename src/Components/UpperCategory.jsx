import React, { useContext, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { MyContext } from "./Contexts";

const UpperCategory = () => {
  const { renderer, setRenderer } = useContext(MyContext);
  const [category, setCategory] = useState("");
  const addCategory = async (e) => {
    e.preventDefault();
    if (category !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4001/categoryenter",
          { Entercategory: category }
        );
        if (response.status === 201) {
          setRenderer(renderer+1)
          setCategory("");
          toast.success("Category Added Successfully !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } catch (err) {
        console.log(err);
        toast.error("Internal Server Error!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          toastId: 123,
        });
      }
    } else {
      toast.error("Cannot be empty!!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <form action="">
        <div className="upper-left">
          <div className="ul1">Add Category</div>
          <div className="ul2">
            <label htmlFor="">Name of Category</label>
            <div className="input">
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                type="text"
                placeholder="Enter Category"
              />
            </div>
          </div>
          <div className="ul3">
            <button onClick={addCategory} className="new-cat">
              Create New Category
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default UpperCategory;
