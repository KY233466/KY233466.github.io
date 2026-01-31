"use client";

import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";

import Me from "../../pic/me.jpg";
import LinkedIn from "../../pic/LinkedIn.png";
import styles from "./IntroCard.module.css";
import GitHub from "../../pic/Github.png";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../../i18n";
import resolveAsset from "../../lib/resolveAsset";

function IntroCard() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    const handler = () => setLocale(i18n.language);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  const Lpath = "LandingPage.";

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div className={styles.wrapper}>
        <div className={styles.innerGrid}>
          <article className={styles.textCol}>
            <p className={styles.eyebrow}>{t(Lpath + "Intro.header1")}</p>
            <p className={styles.description}>{t(Lpath + "Intro.message1")}</p>
            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/in/katie-yang-ky/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <img
                  className={styles.icon}
                  src={resolveAsset(LinkedIn)}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/KY233466"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <img
                  className={styles.icon}
                  src={resolveAsset(GitHub)}
                  alt="Github Icon"
                />
              </a>
            </div>
          </article>

          <aside className={styles.visualCol}>
            <div className={styles.profileCard}>
              <div className={styles.portrait}>
                {!loaded && (
                  <Skeleton
                    variant="rounded"
                    className={styles.portraitSkeleton}
                  />
                )}
                <Image
                  src={Me}
                  alt="Katie Yang"
                  className={loaded ? styles.profileImage : styles.hiddenImg}
                  fill
                  sizes="(max-width: 720px) 70vw, 40vw"
                  priority
                  onLoadingComplete={() => setLoaded(true)}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default IntroCard;
