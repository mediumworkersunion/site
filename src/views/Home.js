import React from "react";

import Cta from "../components/sections/Cta";
import { FAQTiles } from "../components/sections/FAQTiles";
// import sections
import Hero from "../components/sections/Hero";
import Testimonial from "../components/sections/Testimonial";
import PressKit from "../components/sections/PressKit";
import { VisionStatement } from "../components/sections/VisionStatement";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <VisionStatement
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <FAQTiles />
      <PressKit/>
      {/* This stays commented out until we reach > 50% members submitted */}
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
};

export default Home;
