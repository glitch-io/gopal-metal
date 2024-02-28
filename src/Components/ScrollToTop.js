import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { CaretUp } from "phosphor-react";
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      // Adjust this value based on your preference
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <button onClick={scrollTop}>
          <CaretUp size={25} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
