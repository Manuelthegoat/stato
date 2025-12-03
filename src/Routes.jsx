import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MeetTheTeam from "./Pages/MeetTheTeam";
import Services from "./Pages/Services";
import FAQ from "./Pages/FAQ";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Countdown from "./Components/CountDown/Countdown";
import Error from "./Pages/Error";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Countdown />} /> */}
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routing;
