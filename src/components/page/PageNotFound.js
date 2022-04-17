import React from "react";
import img from "../../assets/images/banner_error_404.jpg";
const PageNotFound = () => {
  return (
    <div>
      <h1>page not found</h1>

      <img className="w-full h-90" src={img} alt="" />
    </div>
  );
};

export default PageNotFound;
