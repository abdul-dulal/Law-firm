import React from "react";
import profile from "../../assets/images/profile.jpg";
const About = () => {
  return (
    <div className="container mx-auto grid gap-6 md:grid-cols-2 my-8">
      <div>
        <img src={profile} className="rounded-md" alt="" />
      </div>
      <div>
        <p className="text-white text-xl">
          I started my web developer journey with programming- hero. It is very
          important in life.I like to learn new things and work hard. By
          developing websites with innovative and strategic ideas, I want to
          make my presence strong in this field.. I will try to my best. I think
          I will reach out to my destination...Insa-Allah
        </p>
      </div>
    </div>
  );
};

export default About;
