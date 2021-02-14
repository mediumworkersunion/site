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
      <PressKit />
      <div
        style={{
          width: "100%",
          height: "1px",
          borderBottom: "solid 1px #d97f76",
        }}
      />
      {/* TODO: This stays commented out until we reach > 50% members submitted */}
      {/* <Testimonial topDivider /> */}
      {/* TODO: Commenting this out until a PII audit can be done */}
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
