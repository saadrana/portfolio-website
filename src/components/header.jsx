import { Link, useLocation } from "react-router-dom";
import { useState, useImperativeHandle, forwardRef, useRef } from "react";
import styles from "./css/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const Header = (props, ref) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const home = () => {
    closeMenu();
    if (location.pathname === "/") {
      window.fullpage_api.moveTo(1, 0);
    }
  };

  const contact = () => {
    closeMenu();
    if (location.pathname === "/") {
      window.fullpage_api.moveTo(4, 0);
    }
  };

  const header = useRef();

  useImperativeHandle(
    ref,
    () => ({
      dark() {
        header.current.style.backgroundColor = "rgba(0,0,0,0.5)";
      },
      light() {
        header.current.style.backgroundColor = "rgba(0,0,0,0)";
      },
    }),
    []
  );

  let location = useLocation();

  return (
    <header ref={header}>
      <div className={styles.wrap}>
        <Link
          to={{
            pathname: "/",
            hash: "#home",
            state: { from: location.pathname, hash: "#menu" },
          }}
          onClick={home}
          className={styles.name}
        >
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
            <Link
              to={{
                pathname: "/",
                hash: "#home",
                state: { from: location.pathname, hash: "#menu" },
              }}
              onClick={home}
            >
              HOME
            </Link>
          </li>
          <li>
            <a href="https://github.com/saadrana">PROJECTS</a>
          </li>
          <li>
            <Link
              to={{
                pathname: "/about-page",
                state: { from: location.pathname, hash: "#menu" },
              }}
              onClick={closeMenu}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/",
                hash: "#contact",
                state: { from: location.pathname, hash: "#menu" },
              }}
              onClick={contact}
            >
              CONTACT
            </Link>
          </li>
          <li className={styles.smIcons}>
            <a href="https://github.com/saadrana">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className={styles.icon}
              />
            </a>
            <a href="https://github.com/saadrana">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={styles.icon}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default forwardRef(Header);
