import React from "react";
import spinner from "../../assets/Spinner.svg";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner" className="spinnerImage" />
    </div>
  );
};

export default Spinner;
