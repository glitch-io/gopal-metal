import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";
import { carouselItems } from "../../data";
function Slider() {
  // Define an array of carousel items
  return (
    <Carousel>
      {/* Use map function to generate Carousel.Item components */}
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              background: "rgba(0, 0, 0, 0.4)",
              height: "100%",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          ></div>
          <img
            className={`d-block w-100 ${styles.imgHeight}`}
            src={process.env.PUBLIC_URL + item.imageUrl}
            alt={item.altText}
          />

          <div className={styles.heroHeading}>
            <h1>
              Welcome To <span>Nepco Impex LLP</span>
            </h1>
            <p>Flexibility is our product range</p>
            <Link to={"/about-us"}>About us</Link>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
