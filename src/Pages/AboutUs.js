import React from "react";
import Features from "../Components/OurProducts/Features";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills/Skills";
import Banner from "../Components/Banner";
import AboutCompany from "../Components/AboutCompany";
import styles from "./AboutUs.module.css";
import WhoWeAre from "../Components/WhoWeAre";

function AboutUs() {
  return (
    <>
      <Banner title={"About Us"} />
      <AboutCompany />
      <div className={styles.featuresWrapper}>
        <Features />
      </div>
      <WhoWeAre />
      <Experience />
      <Skills />
    </>
  );
}

export default AboutUs;
