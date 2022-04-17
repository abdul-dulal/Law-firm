import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../assets/images/slider/slider1.png";
import slider2 from "../assets/images/slider/slider2.jpg";
import slider3 from "../assets/images/slider/slider3.jpg";
const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[36rem] bg-black opacity-75"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-black font-bold">S Hossain &amp; Associates</h3>
            <p>
              Our Law Firm in Bangladesh is a full service law firm and has
              adequate knowledge, expertise, lawyers, consultants and logistics
              to undertake any legal, para legal or related service.
            </p>
            <button type="button" className="btn btn-info py-3 px-5">
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[36rem]"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Professional Law Firm</h3>
            <p>
              Our Law Firm in Bangladesh is a full service law firm and has
              adequate knowledge, expertise, lawyers, consultants and logistics
              to undertake any legal, para legal or related service.
            </p>
            <button type="button" className="btn btn-info py-3 px-5">
              Book Now
            </button>
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
              clients from the services we are rendering to them by best lawyers
              in Bangladesh and we plan our course of action to meet the desired
              goal of the client..
            </p>
            <button type="button" className="btn btn-info py-3 px-5">
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
