import React from "react";
import { FaBalanceScale } from "react-icons/fa";
const Balance = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <div className="bg-green-500 w-24 " style={{ height: "2px" }}></div>
        <p className="mt-2 px-2 text-white text-3xl">
          <FaBalanceScale />
        </p>
        <div className="bg-green-500 w-24" style={{ height: "2px" }}></div>
      </div>
    </div>
  );
};

export default Balance;
