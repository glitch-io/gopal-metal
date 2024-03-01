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
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <div className={styles.dropDown}>
          <button className={`${styles.dropBtn}`}>
            Product <CaretDown size={15} />
          </button>
          <div className={styles.dropdownContent}>
            <Link to="/flanges" onClick={toggleMenu}>
              Flanges
            </Link>
            <Link to="/forged-fittings" onClick={toggleMenu}>
              Forged Fittings
            </Link>
            <Link to="/buttweld-fittings" onClick={toggleMenu}>
              Buttweld Fittings
            </Link>
            <Link to="/pipe" onClick={toggleMenu}>
              Pipe & Tube
            </Link>
            <Link to="/round-bar" onClick={toggleMenu}>
              Round Bar
            </Link>
            <Link to="/sheet" onClick={toggleMenu}>
              Sheet & Plate
            </Link>
          </div>
        </div>
        <li>
          <NavLink to="/quality" onClick={toggleMenu}>
            Quality
          </NavLink>
        </li>
        <div className={styles.dropDown}>
          <button className={styles.dropBtn}>
            Technical info <CaretDown size={15} />
          </button>
          <div className={styles.dropdownContent}>
            <Link to="/chemical-composition" onClick={toggleMenu}>
              Chemical Composition
            </Link>
            <Link to="/mechanical-composition" onClick={toggleMenu}>
              Mechanical Composition
            </Link>
          </div>
        </div>
        <li>
          <NavLink to="/contact-us" onClick={toggleMenu}>
            Contact
          </NavLink>
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
