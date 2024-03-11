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
            Nepco Impex LLP stands as a prominent figure in the manufacturing
            and export of top-notch flanges, pipes, pipe fittings, buttweld,
            fasteners, and sheets. Our extensive range encompasses alloy steel,
            carbon steel, stainless steel, and nickel alloys. With a steadfast
            commitment to consistency and quality, we have earned a reputation
            as a trusted supplier in the industry. Our adeptness in crafting
            products across different metal alloys and specifications
            underscores our ability to meet diverse client needs effectively.
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
              <Link to="/flanges">Product</Link>
            </li>
            <li>
              <Link to="/quality">Quality</Link>
            </li>
            <li>
              <Link to="/chemical-composition">Technical Info</Link>
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
            Corporate Office : GF-1, Jaya Building, 2nd Carpenter Street, C.P
            Tank,Mumbai - 400004. (MH) India
          </p>
          <p>Phone: +91 80562 03904</p>
          <p>Mail : sales@nepcoimpexllp.in</p>
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
