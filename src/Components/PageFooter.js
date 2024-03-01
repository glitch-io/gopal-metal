import React from "react";
import SocialNav from "./SocialNav";
import { Link } from "react-router-dom";
import styles from "./PageFooter.module.css";
function PageFooter() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.about} data-aos="fade-up">
          <h1>About us</h1>
          <p>
            Nepco Impex LLP is one of the leading company amongst the
            manufacturers and exporters of high quality flanges,Pipes and Pipe
            Fittings, Buttweld, Fasteners&sheets in Alloy steel, carbon steel,
            stainless steel, nickel alloys. Through regular and consistent
            supply of our products at industry leading prices, we have
            established ourselves a reliable player in the industry. We have the
            capability and expertise to design these products in different metal
            alloys and in a variety of specifications to fulfill the various
            requirements of our clients.
          </p>
          <SocialNav />
        </div>
        <div className={styles.quickLinks} data-aos="fade-up">
          <h1>Quick Links</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/quality">Quality</Link>
            </li>
            <li>
              <Link to="/technical-info">Technical Info</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.quickLinks} data-aos="fade-up">
          <h1>Our Products</h1>
          <ul>
            <li>
              <Link to="/flanges">Flanges</Link>
            </li>
            <li>
              <Link to="/forged-fittings">Forged Fittings</Link>
            </li>
            <li>
              <Link to="/buttweld-fittings">Buttweld Fittings</Link>
            </li>
            <li>
              <Link to="/pipe">Pipe & Tube</Link>
            </li>
            <li>
              <Link to="/round-bar">Round Bar</Link>
            </li>
            <li>
              <Link to="/sheet">Sheet & Plate</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact} data-aos="fade-up">
          <h1> Contact US</h1>
          <p>
            Regd. Office : Shop no. 9 Balaji Nandan, Near Reva Park,Waghodia
            Road, Vadodara - 390025
          </p>
          <p>Manufacturing Unit :</p>
          <p>Telephone : +91 79908 51289</p>
          <p>Phone: +91 79908 51289/+91 91042 26436</p>
          <p>Mail : nepcoimpexllp@gmail.com</p>
        </div>
      </div>
      <center>
        &#169; 2024 Nepco Impex LLP Developed By{" "}
        <Link to={"https://thetechbits.in/"}>TechBits Media Pvt. Ltd</Link>
      </center>
    </footer>
  );
}

export default PageFooter;
