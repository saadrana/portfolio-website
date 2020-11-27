import { Link } from "react-router-dom";
import React, { useState } from "react";
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
          <a href="https://github.com/saadrana" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
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
            <a href="/#home" onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="https://github.com/saadrana">PROJECTS</a>
          </li>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
