import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Newsletter from "../Components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Stato | Creative Branding & Digital Agency</title>
        <meta
          name="description"
          content="Stato is a creative agency helping brands grow through strategic branding, marketing, and digital experiences that leave a lasting impact."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://stato.work/" />

        {/* Open Graph */}
        <meta property="og:title" content="Stato | Creative Branding & Digital Agency" />
        <meta
          property="og:description"
          content="We build powerful brands through strategy, creativity, and digital innovation."
        />
        <meta property="og:url" content="https://stato.work/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stato" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stato | Creative Branding & Digital Agency" />
        <meta
          name="twitter:description"
          content="Creative infrastructure for the next generation of brands."
        />
      </Helmet>

      <Hero />
      <About />
      <Newsletter />
    </>
  );
};

export default Home;
