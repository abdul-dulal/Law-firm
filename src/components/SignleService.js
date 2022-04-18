import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { serviceContext } from "./Services";

const SignleService = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>this is singleServie {serviceId}</h1>
    </div>
  );
};

export default SignleService;
