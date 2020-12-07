//import { useEffect, useRef } from "react";
import styles from "./css/about.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <div className={styles.topPage}>
        <div className={styles.topPageInner}>
          <Link className={styles.backArrow} to="/#aboutMe"></Link>
          <p className={styles.scrollDown}>SCROLLDOWN</p>
          <div className={styles.title}>
            <h1 className={styles.mainText}>About Me</h1>
            <div className={styles.border}>
              <span></span>
              <span></span>
            </div>
            <p className={styles.sideText}>Life through my lens</p>
          </div>
          <div className={`${styles.image} ${styles.imgAbout}`}></div>
        </div>
      </div>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={`${styles.text} ${styles.textTop}`}>
            <p className={styles.headingNum}>01</p>
            <div
              className={`${styles.textWrap} ${styles.textWrapTop} ${styles.content}`}
            >
              <h2 className={`${styles.heading} ${styles.headingTop}`}>
                WHO I AM
              </h2>
              <div className={styles.whoWrap}>
                <div className={styles.whoName}>
                  <h3 className={styles.whoEng}>Saad Rana</h3>
                </div>
                <p className={styles.whoText}></p>
                <div className={styles.whoImage}></div>
              </div>
            </div>
          </div>
        </div>
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
                <h3 className={styles.subHeading}>Impact</h3>
                <p className={styles.passionText}></p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.footer}>
        <a href="mailto:saad-rana@outlook.com">saad-rana@outlook.com</a>
      </div>
    </main>
  );
};

export default About;
