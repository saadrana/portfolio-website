import {
  useRef,
  useLayoutEffect,
  useEffect,
  useContext,
  useCallback,
} from "react";
import styles from "./css/about.module.css";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Refs from "../global/Refs";
import profilePic from "../images/N_286.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scoutBtn = useRef();
  const arrow = useCallback((node) => {
    if (node !== null) {
      arrow.current = node;
    }
  }, []);
  const scroll = useRef();
  const sec1 = useRef();
  const sec2 = useRef();
  const loader = useRef();

  const refs = useContext(Refs);

  let location = useLocation();

  useLayoutEffect(() => {
    if (location.state !== undefined) {
      if (
        window.innerWidth > 420 &&
        location.state.from === "/" &&
        location.state.hash === "#about"
      ) {
        let tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.from(scoutBtn.current, { translateY: 200 })
          .from(
            arrow.current,
            {
              translateX: 200,
            },
            "<"
          )
          .from(scroll.current, { translateY: 200 }, "<");
      } else if (location.state.hash !== "#menu") {
        let tl = gsap.timeline();
        tl.from(loader.current, { y: 0, ease: "none", duration: 0.6 }, 0.3);
      }
    } else {
      let tl = gsap.timeline();
      tl.from(loader.current, { y: 0, ease: "none", duration: 0.6 }, 0.3);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sec2.current,
      start: "top top+=250",
      onToggle: (self) => {
        if (self.direction === 1) {
          refs.header.current.dark();
          arrow.current.style.visibility = "hidden";
        } else if (self.direction === -1) {
          refs.header.current.light();
          arrow.current.style.visibility = "visible";
        }
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className={styles.topPage} ref={sec1}>
        <div className={styles.topPageInner}>
          <div className={styles.backArrowWrap}>
            <Link
              className={styles.backArrow}
              to={{
                pathname: "/",
                hash: "#about",
                state: { from: location.pathname, hash: location.hash },
              }}
              ref={arrow}
            ></Link>
          </div>
          <p className={styles.scrollDown} ref={scroll}>
            SCROLLDOWN
          </p>
          <div className={styles.title}>
            <h1 className={styles.mainText}>About Me</h1>
            <div className={styles.border}>
              <span></span>
              <span></span>
            </div>
            <p className={styles.sideText}>Life through my lens</p>
            <div className={styles.btnWrap} ref={scoutBtn}>
              <a href="https://twitter.com/SaadURana" className={styles.btn}>
                My Twitter
              </a>
            </div>
          </div>
          <div className={`${styles.image} ${styles.imgAbout}`}></div>
        </div>
      </div>
      <section className={styles.wrapper} ref={sec2}>
        <div className={styles.containerTop}>
          <div className={`${styles.text} ${styles.textTop}`}>
            <p className={styles.headingNum}>01</p>
            <h2 className={`${styles.heading} ${styles.headingTop}`}>
              WHO I AM
            </h2>
            <div className={styles.whoWrap}>
              <div className={styles.whoName}>
                <h3 className={styles.whoEng}>Saad Rana</h3>
              </div>
              <div className={styles.whoText}>
                <p>
                  Hi there! My name is Saad, and I am an aspiring Software
                  Engineer. I recently graduated from the University of Oxford
                  with a Masters degree in Engineering Science. In pursuit of
                  how I can add value to peoples lives, I am currently exploring
                  Front-End development and UX design. The challenge of creating
                  an application that is not only efficient, but visually
                  beautiful and a pleasure to use, is one I hope to tackle in
                  the coming years.
                </p>
                <p>
                  In my spare time I love to play video games such as Valorant
                  and Genshin Impact. Working towards my dream gaming setup, RGB
                  Everything! I love listening to music, and enjoy doing
                  karaoke.
                </p>
              </div>

              <div className={styles.whoImage}>
                <img src={profilePic} alt="Saad Rana"></img>
              </div>
            </div>
          </div>
        </div>
        {/*
          <div className={styles.container}>
            <div className={`${styles.text} ${styles.textMid}`}>
              <p className={styles.headingNum}>02</p>
              <div className={`${styles.textWrap} ${styles.content}`}>
                <h2 className={styles.heading}>PASSION</h2>
              </div>
            </div>
            <div className={styles.content}>
              <ul className={styles.passionList}>
                <li className={styles.passionItem}>
                  <div className={styles.passionImage}></div>
                  <h3 className={styles.subHeading}></h3>
                  <p className={styles.passionText}></p>
                </li>
              </ul>
            </div>
          </div>
        */}
      </section>

      <div className={styles.footer}>
        <a href="mailto:saad-rana@outlook.com">saad-rana@outlook.com</a>
      </div>
      <div className={styles.loader} ref={loader}></div>
    </main>
  );
};

export default About;
