import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = ({ className }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${
        className ? className : ""
      }`}
      style={{
        minHeight: "200px",
      }}
    >
      <BounceLoader color="#002c72" />
    </div>
  );
};

export default Loader;
