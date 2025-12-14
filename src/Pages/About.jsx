import React from "react";
import { Helmet } from "react-helmet-async";

import AboutHero from "../Components/AboutComponents/AboutHero";
import Values from "../Components/AboutComponents/Values";
import Mission from "../Components/AboutComponents/Mission";
import HowWeWork from "../Components/AboutComponents/HowWeWork";
import CTTA from "../Components/AboutComponents/CTTA";

const About = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>About Stato | Creative Branding & Digital Agency</title>
        <meta
          name="description"
          content="Learn about Stato, our mission, values, and creative process. We help brands grow through strategic thinking, innovation, and impactful storytelling."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://stato.work/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Stato | Creative Branding Agency" />
        <meta
          property="og:description"
          content="Discover Stato’s mission, values, and how we build meaningful brand experiences."
        />
        <meta property="og:url" content="https://stato.work/about" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Stato" />
        <meta
          name="twitter:description"
          content="A creative agency obsessed with building brands that matter."
        />
      </Helmet>

      <AboutHero />
      <Values />
      <Mission />
      <HowWeWork />
      <CTTA />
    </>
  );
};

export default About;
