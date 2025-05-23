import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
