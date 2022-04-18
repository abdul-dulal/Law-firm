import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { serviceContext } from "../App";

const SignleService = () => {
  const { serviceId } = useParams();
  const [services] = useContext(serviceContext);
  const service = services.find((service) => service.id == serviceId);
  console.log(service);
  return (
    <div className="container my-5">
      <div className="text-center  mb-3 max-w-sm bg-[#374151] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-20 w-15 mx-auto mt-3"
          src={service?.img}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {service?.title}
          </h5>

          <p className="mb-3 font-normal text-white dark:text-gray-400">
            {service?.descrption}
          </p>
          <p className="text-white"> Price : $ {service?.price}</p>
          <Link
            to={"/checkout"}
            className=" inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CheckOut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignleService;
