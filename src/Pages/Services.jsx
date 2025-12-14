import React from "react";
import { Helmet } from "react-helmet-async";

import ServicesHero from "../Components/ServicesComponents/ServicesHero";
import Offer from "../Components/ServicesComponents/Offer";
import AddServices from "../Components/ServicesComponents/AddServices";
import CTA from "../Components/CTA/CTA";
import Newsletter from "../Components/Newsletter/Newsletter";

const Services = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Branding & Digital Services | Stato Creative Agency</title>
        <meta
          name="description"
          content="Explore Stato’s branding, strategy, and digital services designed to help businesses stand out, grow faster, and connect with their audience."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://stato.work/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Branding & Digital Services | Stato" />
        <meta
          property="og:description"
          content="Creative branding, marketing strategy, and digital solutions tailored to your business goals."
        />
        <meta property="og:url" content="https://stato.work/services" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stato Services" />
        <meta
          name="twitter:description"
          content="Strategic branding and digital services for modern businesses."
        />
      </Helmet>

      <ServicesHero />
      <Offer />
      <AddServices />
      <CTA />
      <Newsletter />
    </>
  );
};

export default Services;
