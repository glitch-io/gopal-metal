import React from "react";
import Features from "../Components/OurProducts/Features";
import Experience from "../Components/Experience";
import Skills from "../Components/Skills/Skills";
import Banner from "../Components/Banner";
import AboutCompany from "../Components/AboutCompany";
import styles from "./AboutUs.module.css";
import WhoWeAre from "../Components/WhoWeAre";
import { Helmet } from "react-helmet-async";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About - Nepco Impex LLP</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>
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
