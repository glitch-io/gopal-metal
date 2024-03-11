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
          Nepco Impex LLP stands tall as a premier manufacturer and exporter,
          specializing in top-notch flanges, pipes, pipe fittings, buttweld,
          fasteners, and sheets. Our range encompasses a variety of materials
          including alloy steel, carbon steel, stainless steel, and nickel
          alloys, ensuring we cater to diverse industrial needs.
          <br />
          With a commitment to consistency and reliability, we offer our
          products at competitive prices, earning us a solid reputation in the
          industry. Our strength lies in our ability to customize products
          according to client specifications, utilizing various metal alloys to
          meet their unique requirements.
          <br />
          Adapting to the evolving market demands, we have carved a niche for
          ourselves both domestically and internationally. Our dedication to
          quality and customer satisfaction has earned us trust and loyalty from
          clients worldwide.
        </p>
        <Link to="/about-us">
          More About <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default About;
