import React from "react";
import ClientChose from "../ClientChose";
import Information from "../Information";
import Services from "../Services";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Information />
      <Services />
      <ClientChose />
    </div>
  );
};

export default Home;
