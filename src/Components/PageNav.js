import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { CaretDown, List, X } from "phosphor-react";

function PageNav() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`${styles.nav} ${isNavFixed ? styles.fixed : ""}`}>
      <Logo />

      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <div className={styles.dropDown}>
          <button className={`${styles.dropBtn}`}>
            Product <CaretDown size={15} />
          </button>
          <div className={styles.dropdownContent}>
            <Link to="/flanges">Flanges</Link>
            <Link to="/forged-fittings">Forged Fittings</Link>
            <Link to="/buttweld-fittings">Buttweld Fittings</Link>
            <Link to="/pipe">Pipe & Tube</Link>
            <Link to="/round-bar">Round Bar</Link>
            <Link to="/sheet">Sheet & Plate</Link>
          </div>
        </div>
        <li>
          <NavLink to="/quality">Quality</NavLink>
        </li>
        <div className={styles.dropDown}>
          <button className={styles.dropBtn}>
            Technical info <CaretDown size={15} />
          </button>
          <div className={styles.dropdownContent}>
            <Link to="/chemical-composition">Chemical Composition</Link>
            <Link to="/mechanical-composition">Mechanical Composition</Link>
          </div>
        </div>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
        <button className={`${styles.close}  `} onClick={toggleMenu}>
          <X />
        </button>
      </ul>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        <List />
      </button>
    </nav>
  );
}

export default PageNav;
