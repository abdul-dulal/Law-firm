import React from "react";
import Balance from "./Balance";
import law from "../assets/images/slider/Bangladesh-High-Court-1-1.jpg";
const ClientChose = () => {
  return (
    <div className="text-center relative my-5 ">
      <div className=" bg-black opacity-30">
        <img className="w-full h-[500px]" src={law} alt="" />
      </div>
      <div className=" w-full absolute top-20 left-auto text-white">
        <h1>WHY CLIENTS CHOOSE ME?</h1>
        <Balance />
        <p>
          We, S Hossain and Associates always try our best to find out what is
          the desired outcome of the clients from <br /> the services we are
          rendering to them ; and we plan our course of action to meet the
          desired goal of the client and <br /> thus we i.e. S Hossain &amp;
          Associates Bangladesh Law Firm and our client walk in the same path
          and try together to reach the <br />
          common goal.
        </p>
      </div>
    </div>
  );
};

export default ClientChose;
