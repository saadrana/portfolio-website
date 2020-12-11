import fullpage from "fullpage.js";
import { useHistory } from "react-router-dom";

import { useEffect, useRef, useLayoutEffect } from "react";
import styles from "./css/home.module.css";

import gsap from "gsap";
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

  const sky = useRef();

  const comet1 = useRef();
  const comet2 = useRef();
  const comet3 = useRef();
  const comet4 = useRef();
  const comet5 = useRef();

  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();

  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  const scroll = useRef();

  const projects = useRef();
  const red3 = useRef();
  const red4 = useRef();
  const projectsText = useRef();
  const projectsBtn = useRef();

  const about = useRef();
  const red5 = useRef();
  const red6 = useRef();
  const aboutText = useRef();
  const aboutBtn = useRef();

  const contact = useRef();
  const red7 = useRef();
  const red8 = useRef();
  const contactBtn = useRef();

  let history = useHistory();

  const aboutClick = () => {
    let tl = gsap.timeline({
      onComplete: () => history.push("/about"),
      defaults: { duration: 0.5 },
    });
    tl.to(img2.current, {
      height: "100vh",
      width: "61%",
      margin: "0 0 0 auto",
      boxShadow: "none",
    })
      .to(num2.current, { translateY: 120 }, "<")
      .to(aboutBtn.current, { translateY: 100 }, "<")
      .to(sky.current, { background: "#100e17" }, "<")
      .to(stars.current, { visibility: "hidden" }, "<");
  };

  const transition = (origin, destination, direction) => {
    if (origin.anchor === "home") {
      let tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.fromTo(name.current, { translateX: 0 }, { translateX: -500 })
        .fromTo(red1.current, { translateX: 0 }, { translateX: -500 }, "<")
        .fromTo(red2.current, { translateX: 0 }, { translateX: -800 }, "<")
        .fromTo(titles.current, { translateX: 0 }, { translateX: -500 }, "<")
        .fromTo(portfolio.current, { translateX: 0 }, { translateX: 1000 }, "<")
        .fromTo(moon.current, { translateX: 0 }, { translateX: 1000 }, "<")
        .fromTo(
          comet1.current,
          { translateX: 0, translateY: 0 },
          { translateX: -500, translateY: -500 },

          "<"
        )
        .fromTo(
          comet2.current,
          { translateX: 0, translateY: 0 },
          { translateX: -500, translateY: -500 },

          "<"
        )
        .fromTo(
          comet3.current,
          { translateX: 0, translateY: 0 },
          { translateX: -600, translateY: -600 },

          "<"
        )
        .fromTo(
          comet4.current,
          { translateX: 0, translateY: 0 },
          { translateX: -1000, translateY: -1000 },

          "<"
        )
        .fromTo(
          comet5.current,
          { translateX: 0, translateY: 0 },
          { translateX: -1000, translateY: -1000 },

          "<"
        )
        .fromTo(scroll.current, { translateY: 0 }, { translateY: 200 }, "<");
    }

    if (destination.anchor === "home") {
      let tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.fromTo(name.current, { translateX: -500 }, { translateX: 0 })
        .fromTo(red1.current, { translateX: -500 }, { translateX: 0 }, "<")
        .fromTo(red2.current, { translateX: -800 }, { translateX: 0 }, "<")
        .fromTo(
          titles.current,
          { translateX: -500 },
          { translateX: 0 },
          "<+0.2"
        )
        .fromTo(portfolio.current, { translateX: 1000 }, { translateX: 0 }, "<")
        .fromTo(moon.current, { translateX: 1000 }, { translateX: 0 }, "<")
        .fromTo(
          comet1.current,
          { translateX: -500, translateY: -500 },
          { translateX: 0, translateY: 0 },
          "<"
        )
        .fromTo(
          comet2.current,
          { translateX: -500, translateY: -500 },
          { translateX: 0, translateY: 0 },
          "<"
        )
        .fromTo(
          comet3.current,
          { translateX: -600, translateY: -600 },
          { translateX: 0, translateY: 0 },
          "<"
        )
        .fromTo(
          comet4.current,
          { translateX: -1000, translateY: -1000 },
          { translateX: 0, translateY: 0 },
          "<"
        )
        .fromTo(
          comet5.current,
          { translateX: -1000, translateY: -1000 },
          { translateX: 0, translateY: 0 },
          "<"
        )
        .fromTo(scroll.current, { translateY: 200 }, { translateY: 0 }, "<");
    } else if (destination.anchor === "projects") {
      let tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.from(projects.current, { translateX: -500 })
        .from(red3.current, { translateX: -500 }, "<")
        .from(red4.current, { translateX: -800 }, "<")
        .from(projectsText.current, { translateX: -500 }, "<+0.2")
        .from(projectsBtn.current, { translateX: -500 }, "<")
        .from(
          img1.current,
          {
            scaleX: 0.9,
            scaleY: 0.9,
            translateX: 50,
            duration: 1.3,
          },
          0.2
        )
        .from(num1.current, { translateY: 120, duration: 0.5 }, ">-0.8")
        .to(scroll.current, { translateY: 200 }, "<");
    } else if (destination.anchor === "about") {
      let tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.from(about.current, { translateX: -500 })
        .from(red5.current, { translateX: -500 }, "<")
        .from(red6.current, { translateX: -800 }, "<")
        .from(aboutText.current, { translateX: -500 }, "<+0.2")
        .from(aboutBtn.current, { translateX: -500 }, "<")
        .from(
          img2.current,
          {
            scaleX: 0.9,
            scaleY: 0.9,
            translateX: 50,
            duration: 1.3,
          },
          0.2
        )
        .from(num2.current, { translateY: 120, duration: 0.5 }, ">-0.8")
        .to(scroll.current, { translateY: 200 }, "<");
    } else if (destination.anchor === "contact") {
      let tl = gsap.timeline({ defaults: { duration: 0.9 } });
      tl.from(contact.current, { translateX: -500 })
        .from(red7.current, { translateX: -500 }, "<")
        .from(red8.current, { translateX: -800 }, "<")
        .from(contactBtn.current, { translateX: -500 }, "<+0.2")
        .from(
          img3.current,
          {
            scaleX: 0.9,
            scaleY: 0.9,
            translateX: 50,
            duration: 1.3,
          },
          0.2
        )
        .from(num3.current, { translateY: 120, duration: 0.5 }, ">-0.8")
        .to(scroll.current, { translateY: 200 }, "<");
    }
  };

  useLayoutEffect(() => {
    const fullpage_api = fullpage(fullPage.current, {
      //options here
      autoScrolling: true,
      scrollingSpeed: 1100,
      navigation: true,
      navigationPosition: "left",
      anchors: ["home", "projects", "about", "contact"],
      //navigationTooltips: ["Home", "Projects", "About", "Contact"],
      animateAnchor: false,
      onLeave: (origin, destination, direction) => {
        transition(origin, destination, direction);
      },
    });

    let tl = gsap.timeline({ defaults: { duration: 0.9 } });
    tl.from(loader.current, { y: 0, ease: "none", duration: 0.6 }, 0.3)
      .from(name.current, { translateX: -500 }, ">-0.3")
      .from(red1.current, { translateX: -500 }, "<")
      .from(red2.current, { translateX: -800 }, "<")
      .from(titles.current, { translateX: -500 }, "<+0.2")
      .from(portfolio.current, { translateX: 1100 }, "<")
      .from(moon.current, { translateX: 1000 }, "<")
      .from(comet1.current, { translateX: -500, translateY: -500 }, "<")
      .from(comet2.current, { translateX: -500, translateY: -500 }, "<")
      .from(comet3.current, { translateX: -600, translateY: -600 }, "<")
      .from(comet4.current, { translateX: -1000, translateY: -1000 }, "<")
      .from(comet5.current, { translateX: -1000, translateY: -1000 }, "<");

    return () => {
      fullpage_api.destroy("all");
    };
  }, []);

  useEffect(() => {
    new Parallax(scene.current);
    new Parallax(stars.current);
  }, []);

  return (
    <main>
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
                <img
                  src={cometImg}
                  className={styles.comet1}
                  alt=""
                  ref={comet1}
                ></img>
              </div>
              <div className={styles.comets} data-depth="0.3">
                <img
                  src={cometImg}
                  className={styles.comet2}
                  alt=""
                  ref={comet2}
                ></img>
              </div>
              <div className={styles.comets} data-depth="0.7">
                <img
                  src={cometImg}
                  className={styles.comet3}
                  alt=""
                  ref={comet3}
                ></img>
              </div>
              <div className={styles.comets} data-depth="0.8">
                <img
                  src={cometImg}
                  className={styles.comet4}
                  alt=""
                  ref={comet4}
                ></img>
              </div>
              <div className={styles.comets} data-depth="0.3">
                <img
                  src={cometImg}
                  className={styles.comet5}
                  alt=""
                  ref={comet5}
                ></img>
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
            <div className={styles.btnWrap} ref={projectsBtn}>
              <a className={styles.btn} href="https://github.com/saadrana">
                Github
              </a>
            </div>
          </div>
          <a
            className={`${styles.image} ${styles.imgProjects}`}
            href="https://github.com/saadrana"
            ref={img1}
          >
            <div className={styles.imageOver}>
              <div className={styles.imageCover}></div>
              <div className={styles.imageCover}></div>
            </div>
            <div className={styles.pageNum}>
              <p ref={num1}>01</p>
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
            <p className={styles.sideText} ref={aboutText}>
              Life through my lens
            </p>
            <div className={styles.btnWrap} ref={aboutBtn}>
              <button className={styles.btn} onClick={aboutClick}>
                Show me more
              </button>
            </div>
          </div>
          <button
            className={`${styles.image} ${styles.imgAbout}`}
            onClick={aboutClick}
            ref={img2}
          >
            <div className={styles.imageOver}>
              <div className={styles.imageCover}></div>
              <div className={styles.imageCover}></div>
            </div>
            <div className={styles.pageNum}>
              <p ref={num2}>02</p>
            </div>
          </button>
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
            <ul ref={contactBtn}>
              <li>
                <a href="mailto:saad-rana@outlook.com">saad-rana@outlook.com</a>
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
          <button className={`${styles.image} ${styles.imgContact}`} ref={img3}>
            <div className={styles.imageOver}>
              <div className={styles.imageCover}></div>
              <div className={styles.imageCover}></div>
            </div>
            <div className={styles.pageNum}>
              <p ref={num3}>03</p>
            </div>
          </button>
        </section>
      </div>
      <p className={styles.scrollDown} ref={scroll}>
        SCROLLDOWN
      </p>
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
      <div className={styles.sky} ref={sky}></div>
      <div className={styles.curtain} ref={curtain}></div>
      <div className={styles.loader} ref={loader}></div>
    </main>
  );
};

export default Home;
