"use client";

import styles from "./Card.module.css";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

function Card() {
  const { t } = useTranslation();
  const LPIpath = "LandingPage.";
  const matches = useMediaQuery("(min-width:860px)");

  return (
    <div>
      <div className={styles.glass1}>
        <div className={styles.header}>
          <h1>{t(LPIpath + "Intro.header1")}</h1>
          <h2>{t(LPIpath + "Intro.header2")}</h2>
        </div>
        <div className={styles.bodyText}>
          <h3>{t(LPIpath + "Intro.slogan")}</h3>
        </div>
      </div>
      <div className={matches ? styles.glass2 : styles.glass2}>
        <div className={styles.bodyText}>
          <h4>{t(LPIpath + "Intro.message1")}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
