import React from "react";
import "./Category.css";
import { BiRefresh } from "react-icons/bi";
import UpperCategory from "./UpperCategory";
import LowerCategory from "./LowerCategory";
import Table from "./Table";

const Category = () => {
  return (
    <div className="category-wrapper">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div className="heading-container">
          <div className="left-heading">
            <h1>Category</h1>
          </div>
          <div className="right-heading">
            <h1>Admin Panel</h1>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="category">
          <div className="left-category">
            <UpperCategory />
            <LowerCategory />
          </div>
          <div className="right-category">
            <div className="right-header">
              <h3>All Listed Category</h3>
              <a href="/">
                <BiRefresh /> Refresh
              </a>
            </div>
            <div className="right-body">
              {/* <div className="heading-right">
                <div className="body-left">
                  <div className="buttons">
                    <button
                      style={{ borderRadius: "0.25rem 0 0 0.25rem" }}
                      className="cat-buttons"
                    >
                      PDF
                    </button>
                    <button className="cat-buttons">Print</button>
                    <button
                      style={{ borderRadius: "0 0.25rem 0.25rem 0" }}
                      className="cat-buttons"
                    >
                      Column Visibility
                      <IoMdArrowDropdown />
                    </button>
                  </div>
                </div>
                <div className="body-right">
                  <label htmlFor="">Search:</label>
                  <input className="input-field" type="text" />
                </div>
              </div> */}
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
