import React from "react";
import ClientChose from "../ClientChose";
import Banner from "../Banner";
import Services from "../Services";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Banner />
      <Services />
      <ClientChose />
    </div>
  );
};

export default Home;
