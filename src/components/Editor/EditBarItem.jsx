import React from "react";

const EditBar = (props) => {
  return (
    <>
      <button
        className={`sidebar-item ${props.activeitem ? "active" : ""}`}
        onClick={props.activeChangeHandler}
      >
        {props.itemName}
      </button>
    </>
  );
};

export default EditBar;
