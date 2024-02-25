import React from "react";
import PageNav from "../Components/PageNav";
import PageFooter from "../Components/PageFooter";
import HowWeAre from "../Components/HowWeAre";
import Features from "../Components/OurProducts/Features";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills/Skills";
import Banner from "../Components/Banner";
import AboutCompany from "../Components/AboutCompany";
function AboutUs() {
  return (
    <>
      <PageNav />
      <Banner title={"About Us"} />
      <AboutCompany />
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
