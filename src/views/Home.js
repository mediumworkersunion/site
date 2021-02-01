import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import { FAQTiles } from "../components/sections/FAQTiles";
import { VisionStatement } from "../components/sections/VisionStatement";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

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
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
