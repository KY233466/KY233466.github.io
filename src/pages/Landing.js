import { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Me from "../pic/me.jpg";
import LinkedIn from "../pic/LinkedIn.png";
import styles from "../components/Landing.module.css";
import GitHub from "../pic/GitHub.png";
import LanguageSelect from "../components/LanguageSelect";
import { useTranslation } from "react-i18next";
import LocaleContext from "../components/LocaleContext";
import NavBarToggle from "../components/NavBar/NavBarToggle";
import i18n from "../i18n";

function Landing() {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", () => setLocale(i18n.language));

  const Lpath = "LandingPage.";

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <section className={styles.wrapper}>
        <div className={styles.heroCard}>
          <div className={styles.innerGrid}>
            <article className={styles.textCol}>
              <p className={styles.eyebrow}>{t(Lpath + "Intro.header1")}</p>
              <h1 className={styles.headline}>{t(Lpath + "Intro.header2")}</h1>
              <p className={styles.description}>{t(Lpath + "Intro.message1")}</p>

            <NavBarToggle/>
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
                  <img
                    className={loaded ? styles.profileImage : styles.hiddenImg}
                    src={Me}
                    alt="Katie Yang"
                    onLoad={() => setLoaded(true)}
                  />
                </div>

              <div className={styles.socialRow}>
                <a
                  href="https://www.linkedin.com/in/katie-yang-ky/"
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
            </aside>
          </div>
        </div>
      </section>
    </LocaleContext.Provider>
  );
}

export default Landing;
