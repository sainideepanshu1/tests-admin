import React, { useState } from "react";
import ProfilePhoto from "../Media/2ead53f5d9c64c6987ff27141023b96b.jpg";
import { AiFillEdit } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

const Profile = () => {
  const a = "Deepanshu";
  const [fname, setFName] = useState(a);
  const [lname, setLName] = useState("Saini");
  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = () => {
    setIsEditable(!isEditable);
  };
  const handleSave = () => {
    setIsEditable(!isEditable);
  };
  return (
    <div className="profile-container">
      <div className="image">
        <img src={ProfilePhoto} alt="Profile"/>
      </div>
      <div className="row">
        <div className="columns">
          <div className="heading">First Name:</div>
          {isEditable ? (
            <input
              onChange={(e) => {
                setFName(e.target.value);
              }}
              type="text"
              value={fname}
            />
          ) : (
            <div>{fname}</div>
          )}
        </div>
        <div className="columns">
          <div className="heading">Last Name:</div>
          {isEditable ? (
            <input
              onChange={(e) => {
                setLName(e.target.value);
              }}
              type="text"
              value={lname}
            />
          ) : (
            <div>{lname}</div>
          )}
        </div>
      </div>
      <div className="row">
        {isEditable ? (
          <button onClick={handleSave}>
            <FcCheckmark />
            Save
          </button>
        ) : (
          <button onClick={handleEdit}>
            <AiFillEdit />
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
