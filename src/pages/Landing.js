import React from "react";
import { Link } from "react-router-dom";
import Me from "../pic/me.jpg";
import LinkedIn from "../pic/LinkedIn.png";
import styles from "../components/Landing.module.css";
import Card from "../components/Card/Card";
import GitHub from "../pic/Github.png"

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Card />
        <div className={styles.attribution}>
          Photo by{" "}
          <a href="https://unsplash.com/@ilgmyzin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            ilgmyzin
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <img className={styles.profilePic} src={Me} alt="KY" />
        <h3>
          Which side of me
          <br /> do you want to explore?
        </h3>
        <div className={styles.btnS}>
          <Link className={styles.btn} to="/app">
            <div>Front-end</div>
          </Link>
          <Link className={styles.btn} to="/app/Design">
            <div>Design</div>
          </Link>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/katie-yang-2a863915b/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <img className={styles.icon} src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/KY233466"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <img className={styles.icon} src={GitHub} alt="Github Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
