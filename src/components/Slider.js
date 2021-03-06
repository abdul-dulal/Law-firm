import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../assets/images/slider/slider1.png";

import slider3 from "../assets/images/slider/slider3.jpg";
import law from "../assets/images/slider/hand-shake.jpeg";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[36rem] bg-black opacity-90"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-white font-bold">S Hossain &amp; Associates</h3>
            <p>
              Our Law Firm in Bangladesh is a full service law firm and has
              adequate knowledge, expertise, lawyers, <br /> consultants and
              logistics to undertake any legal, para legal or related service.
            </p>
            <Link Link to={"/signup"} className="btn btn-primary py-3 px-5">
              Contact Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[36rem] bg-slate-900 opacity-75"
            src={law}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Professional Law Firm</h3>
            <p>
              Our Law Firm in Bangladesh is a full service law firm and has
              adequate knowledge, expertise, lawyers, <br />
              consultants and logistics to undertake any legal, para legal or
              related service.
            </p>
            <Link to={"signup"} className="btn btn-primary py-3 px-5">
              Book Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[36rem] bg-black opacity-75 "
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> Specialty </h3>
            <p>
              We always try to find out what is the desired outcome of the
              clients from the services we are rendering <br /> to them by best
              lawyers in Bangladesh and we plan our course of action to meet the
              desired goal of the client..
            </p>
            <Link to={"/signup"} className="btn btn-primary py-3 px-5">
              Book Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
