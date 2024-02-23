import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import styles from "./SocialNav.module.css";
function SocialNav() {
  return (
    <ul className={styles.footerSocial}>
      <li>
        <Link>
          <TwitterLogo color="#f2f2f2" fontSize="2rem" />
        </Link>
      </li>
      <li>
        <Link>
          <InstagramLogo color="#f2f2f2" fontSize="2rem" />
        </Link>
      </li>
      <li>
        <Link>
          <FacebookLogo color="#f2f2f2" fontSize="2rem" />
        </Link>
      </li>
    </ul>
  );
}

export default SocialNav;
