import React from "react";
import law from "../assets/images/law-1-1.png";
import Balance from "./Balance";
const Banner = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="  ">
        <h1 className="text-white text-center">Who am i ? </h1>
        <Balance />
      </div>
      <div className="grid gap-4  md:grid-cols-2 ">
        <div className="my-auto">
          <p className="text-white">
            <span className="text-xl text-gray-400">
              S Hossain &amp; Associates
            </span>
            is a full service law firm in Bangladesh and has adequate knowledge,
            expertise, lawyers, consultants and logistics to undertake any
            legal, para legal or related service. I am experts in any litigation
            i.e. cases before any court of law be that Bangladesh Supreme Court,
            Judges Court, Labour Court, Magistrates Courts etc. Practice areas
            include Litigation, HR &amp; Employment issues, Divorce and family
            law issues, Child custody and Adoption, Banking &amp; Finance,
            Company matter, Admiralty etc. The specialty of our firm is that i
            always try to find out what is the desired outcome of the clients
            from the services i am rendering to them by the best advocate in
            Bangladesh; and my plan my course of action to meet the desired goal
            of the client and thus i i.e. S Hossain &amp; Associates Bangladesh
            Law Firm and our client walk in the same path and try together to
            reach the common goal.
          </p>
        </div>
        <div>
          <img src={law} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
