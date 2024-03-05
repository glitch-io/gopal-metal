import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";
function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutImg} data-aos="fade-right">
        <img src={process.env.PUBLIC_URL + "/Imgs/About.jpeg"} alt="about" />
      </div>
      <div className={styles.aboutText}>
        <h5>ABOUT OUR COMPANY</h5>
        <h1>
          Welcome to <span>Nepco Impex LLP</span>
        </h1>
        <p>
          Nepco Impex LLP is one of the leading company amongst the
          manufacturers and exporters of high quality flanges,Pipes and Pipe
          Fittings, Buttweld, Fasteners&sheets in Alloy steel, carbon steel,
          stainless steel, nickel alloys etc.Through regular and consistent
          supply of our products at industry leading prices, we have established
          ourselves a reliable player in the industry. We have the capability
          and expertise to design these products in different metal alloys and
          in a variety of specifications to fulfill the various requirements of
          our clients. Evolving ourselves with time, we have secured a special
          place for ourselves within the industry as well as among our clients
          in the domestic as well as international markets
        </p>
        <Link to="/about-us">
          More About <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default About;
