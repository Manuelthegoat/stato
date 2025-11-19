import React from "react";
import AboutHero from "../Components/AboutComponents/AboutHero";
import Values from "../Components/AboutComponents/Values";
import Mission from "../Components/AboutComponents/Mission";
import HowWeWork from "../Components/AboutComponents/HowWeWork";
import CTTA from "../Components/AboutComponents/CTTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <Values />
      <Mission />
      <HowWeWork />
      <CTTA />
    </>
  );
};

export default About;
