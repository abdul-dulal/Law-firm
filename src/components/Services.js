import React, { createContext, useEffect, useState } from "react";
import Balance from "./Balance";
import useService from "./Hooks/useService";
import ServiceDeatils from "./ServiceDeatils";
export const serviceContext = createContext();
const Services = () => {
  const [services, setServices] = useService();

  return (
    <serviceContext value={[services]}>
      <div className="container mx-auto">
        <h3 className="text-center text-white">LEGAL PRACTICE AREAS</h3>
        <Balance />
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceDeatils service={service} key={service.id} />
          ))}
        </div>
      </div>
    </serviceContext>
  );
};

export default Services;
