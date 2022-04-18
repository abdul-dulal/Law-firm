import React from "react";
import contact from "../assets/images/law-banner-1024x212-1.jpg";
const Contact = () => {
  return (
    <div className="relative">
      <img src={contact} alt="" className="bg-black opacity-50 w-full" />
      <div className="w-full absolute top-28 h-96 ">
        <h1 className="text-white text-center">Contact Me</h1>
      </div>
    </div>
  );
};

export default Contact;
