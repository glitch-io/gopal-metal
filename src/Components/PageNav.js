import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { CaretDown, CaretUp, List, X } from "phosphor-react";

function PageNav() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTechnical, setShowTechnical] = useState(false);

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
  const toggleTechnical = () => {
    setShowTechnical(!showTechnical);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
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
        <li className={styles.dropDown}>
          <span onClick={toggleDropdown}>
            Product{" "}
            {showDropdown ? <CaretUp size={15} /> : <CaretDown size={15} />}
          </span>

          {showDropdown && (
            <ul className={styles.dropdownContent}>
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
          )}
        </li>
        <li>
          <NavLink to="/quality">Quality</NavLink>
        </li>
        <li>
          <li className={styles.dropDown}>
            <span onClick={toggleTechnical}>
              Technical info{" "}
              {showTechnical ? <CaretUp size={15} /> : <CaretDown size={15} />}
            </span>

            {showTechnical && (
              <ul className={styles.dropdownContent}>
                <li>
                  <Link to="/chemical-composition">Chemical Composition</Link>
                </li>
                <li>
                  <Link to="/mechanical-composition">
                    Mechanical Composition
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </li>
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
