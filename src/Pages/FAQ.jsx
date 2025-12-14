import React from "react";
import { Helmet } from "react-helmet-async";

import FAQQ from "../Components/FAQQ/FAQQ";
import CTA from "../Components/CTA/CTA";
import Newsletter from "../Components/Newsletter/Newsletter";

const FAQ = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>FAQs | Stato Creative Agency</title>
        <meta
          name="description"
          content="Find answers to common questions about Stato’s branding, digital services, pricing, and creative process."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://stato.work/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQs | Stato" />
        <meta
          property="og:description"
          content="Frequently asked questions about our services, process, and working with Stato."
        />
        <meta property="og:url" content="https://stato.work/faq" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stato FAQs" />
        <meta
          name="twitter:description"
          content="Everything you need to know before working with Stato."
        />
      </Helmet>

      <FAQQ />
      <CTA />
      <Newsletter />
    </>
  );
};

export default FAQ;
