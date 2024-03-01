import React from "react";
import HowWeAre from "../Components/HowWeAre";
import Features from "../Components/OurProducts/Features";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills/Skills";
import Banner from "../Components/Banner";
import AboutCompany from "../Components/AboutCompany";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <Banner title={"About Us"} />
      <AboutCompany />
      <div className={styles.featuresWrapper}>
        <Features />
      </div>
      <HowWeAre />
      <Experience />
      <Skills />
    </>
  );
}

export default AboutUs;
