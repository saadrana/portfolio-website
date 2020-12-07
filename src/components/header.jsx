import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./css/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className={styles.wrap}>
        <Link to="/" className={styles.name}>
          Saad Rana{" "}
        </Link>
        <div className={styles.icons}>
          <a href="https://github.com/saadrana">
            <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/saad-rana/">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.icon}
            />
          </a>
        </div>
        <button
          className={`${open ? styles.menuIconOpen : styles.menuIcon}`}
          onClick={toggleMenu}
        ></button>
      </div>
      <nav className={`${open ? styles.globalNavOpen : styles.globalNav}`}>
        <ul className={styles.navList}>
          <li>
            <Link to="/#home" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <a href="https://github.com/saadrana">PROJECTS</a>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
