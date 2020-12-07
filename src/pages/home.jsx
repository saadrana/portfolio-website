import fullpage from "fullpage.js";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/home.module.css";

import gsap from "gsap";
import barba from "@barba/core";
import Parallax from "parallax-js";

import moonImg from "../images/moon.svg";
import starImg from "../images/stars.svg";
import cometImg from "../images/comet.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

const Home = () => {
  const fullPage = useRef();
  const scene = useRef();
  const stars = useRef();

  const name = useRef();
  const red1 = useRef();
  const red2 = useRef();
  const titles = useRef();
  const portfolio = useRef();
  const moon = useRef();
  const curtain = useRef();
  const loader = useRef();

  const projects = useRef();
  const red3 = useRef();
  const red4 = useRef();
  const projectsText = useRef();

  const about = useRef();
  const red5 = useRef();
  const red6 = useRef();
  const aboutText = useRef();

  const contact = useRef();
  const red7 = useRef();
  const red8 = useRef();

  const [loaded, setLoaded] = useState(false);

  function transition(origin, destination, direction) {
    console.log(origin);
  }

  useEffect(() => {
    setLoaded(true);

    barba.init({
      transitions: [
        {
          once() {
            let tl = gsap.timeline({ defaults: { duration: 0.6 } });

            tl.from(loader.current, { y: 0, duration: 0.7 })
              .from(name.current, { translateX: -500 })
              .from(red1.current, { translateX: -500, duration: 0.1 })
              .from(red2.current, { translateX: -500, duration: 0.1 })
              .from(titles.current, { translateX: -500 }, "+=0.1")
              .from(portfolio.current, { translateX: 1000 }, "-=1.2")
              .from(moon.current, { translateX: 1000 }, "-=1.2");
          },
        },
      ],
    });

    const fullpage_api = fullpage(fullPage.current, {
      //options here
      autoScrolling: true,
      navigation: true,
      navigationPosition: "left",
      anchors: ["home", "projects", "aboutMe", "contact"],
      //navigationTooltips: ["Home", "Projects", "About", "Contact"],
      animateAnchor: false,
      onLeave: (origin, destination, direction) => {
        transition(origin, destination, direction);
      },
    });

    new Parallax(scene.current);
    new Parallax(stars.current);

    return () => {
      fullpage_api.destroy("all");
    };
  }, []);

  return (
    <main
      data-barba="wrapper"
      style={{ visibility: loaded ? "visible" : "hidden" }}
    >
      <div data-barba="container" data-barba-namespace="index">
        <div id="fullpage" ref={fullPage}>
          <section className={"section"}>
            <div className={styles.title}>
              <h1 className={styles.mainText} ref={name}>
                SAAD<br></br>RANA
              </h1>
              <div className={styles.border}>
                <span ref={red1}></span>
                <span ref={red2}></span>
              </div>
              <p className={styles.sideText} ref={titles}>
                web developer /<br></br>software engineer.
              </p>
            </div>
            <div className={styles.sideGraphic}>
              <div className={styles.scene} ref={scene}>
                <div className={styles.front} data-depth="0.2">
                  <div className={styles.headingWrap}>
                    <h1 className={styles.headingText} ref={portfolio}>
                      PORTFOLIO
                    </h1>
                  </div>
                </div>
                <div className={styles.back} data-depth="0.5">
                  <img
                    className={styles.moon}
                    src={moonImg}
                    alt="moon"
                    ref={moon}
                  />
                </div>
                <div className={styles.comets} data-depth="0.2">
                  <img src={cometImg} className={styles.comet1} alt=""></img>
                </div>
                <div className={styles.comets} data-depth="0.3">
                  <img src={cometImg} className={styles.comet2} alt=""></img>
                </div>
                <div className={styles.comets} data-depth="0.7">
                  <img src={cometImg} className={styles.comet3} alt=""></img>
                </div>
                <div className={styles.comets} data-depth="0.8">
                  <img src={cometImg} className={styles.comet4} alt=""></img>
                </div>
                <div className={styles.comets} data-depth="0.3">
                  <img src={cometImg} className={styles.comet5} alt=""></img>
                </div>
              </div>
            </div>
          </section>
          <section className={"section"}>
            <div className={styles.title}>
              <h1 className={styles.mainText} ref={projects}>
                Projects
              </h1>
              <div className={styles.border}>
                <span ref={red3}></span>
                <span ref={red4}></span>
              </div>
              <p className={styles.sideText} ref={projectsText}>
                Projects ranging from web apps<br></br>to neural networks can be
                viewed<br></br>on my github
              </p>
              <div className={styles.btnWrap}>
                <a className={styles.btn} href="https://github.com/saadrana">
                  Github
                </a>
              </div>
            </div>
            <a
              className={`${styles.image} ${styles.imgProjects}`}
              href="https://github.com/saadrana"
            >
              <div className={styles.imageOver}>
                <div className={styles.imageCover}></div>
                <div className={styles.imageCover}></div>
              </div>
              <div className={styles.pageNum}>
                <p>01</p>
              </div>
            </a>
          </section>
          <section className={"section"}>
            <div className={styles.title}>
              <h1 className={styles.mainText} ref={about}>
                About Me
              </h1>
              <div className={styles.border}>
                <span ref={red5}></span>
                <span ref={red6}></span>
              </div>
              <p className={styles.sideText} ref={aboutText}></p>
              <div className={styles.btnWrap}>
                <Link className={styles.btn} to="/about">
                  Show me more
                </Link>
              </div>
            </div>
            <Link className={`${styles.image} ${styles.imgAbout}`} to="/about">
              <div className={styles.imageOver}>
                <div className={styles.imageCover}></div>
                <div className={styles.imageCover}></div>
              </div>
              <div className={styles.pageNum}>
                <p>02</p>
              </div>
            </Link>
          </section>
          <section className={"section"}>
            <div className={styles.title}>
              <h1 className={styles.mainText} ref={contact}>
                Get In Touch
              </h1>
              <div className={styles.border}>
                <span ref={red7}></span>
                <span ref={red8}></span>
              </div>
              <ul>
                <li>
                  <a href="mailto:saad-rana@outlook.com">
                    saad-rana@outlook.com
                  </a>
                </li>
                <li>
                  <div className={styles.icons}>
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
                  </div>
                </li>
              </ul>
            </div>
            <div className={`${styles.image} ${styles.imgContact}`}>
              <div className={styles.imageOver}>
                <div className={styles.imageCover}></div>
                <div className={styles.imageCover}></div>
              </div>
              <div className={styles.pageNum}>
                <p>03</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <p className={styles.scrollDown}>SCROLLDOWN</p>
      <div className={styles.stars} ref={stars}>
        <div className={styles.layer} data-depth="0.1">
          <div className={styles.starWrap}>
            <img
              src={starImg}
              alt="starry background"
              className={styles.starImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.sky}></div>
      <div className={styles.curtain} ref={curtain}></div>
      <div className={styles.loader} ref={loader}></div>
    </main>
  );
};

export default Home;
