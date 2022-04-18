import React, { createContext, useContext, useEffect, useState } from "react";
import { serviceContext } from "../App";
import Balance from "./Balance";
import useService from "./Hooks/useService";
import ServiceDeatils from "./ServiceDeatils";

const Services = () => {
  const [services] = useContext(serviceContext);
  return (
    <div className="container mx-auto">
      <h3 className="text-center text-white">LEGAL PRACTICE AREAS</h3>
      <Balance />
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceDeatils service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
