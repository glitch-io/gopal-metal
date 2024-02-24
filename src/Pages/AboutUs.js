import React from "react";
import PageNav from "../Components/PageNav";
import PageFooter from "../Components/PageFooter";
import HowWeAre from "../Components/HowWeAre";
import Features from "../Components/OurProducts/Features";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills/Skills";
function AboutUs() {
  return (
    <>
      <PageNav />
      <div style={{ padding: "0 50px " }}>
        <Features />
      </div>
      <HowWeAre />
      <Experience />
      <Skills />
      <PageFooter />
    </>
  );
}

export default AboutUs;
