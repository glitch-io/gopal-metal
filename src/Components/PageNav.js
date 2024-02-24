import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useState } from "react";
import { List, X } from "phosphor-react";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/quality">Quality</NavLink>
        </li>
        <li>
          <NavLink to="/technical-info">Technical Info</NavLink>
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
