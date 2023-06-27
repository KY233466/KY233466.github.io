import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Me from "../pic/me.jpg";
import LinkedIn from "../pic/LinkedIn.png";
import styles from "../components/Landing.module.css";
import Card from "../components/Card/Card";
import GitHub from "../pic/Github.png";
import LanguageSelect from "../components/LanguageSelect";
import { useTranslation } from "react-i18next";
import LocaleContext from "../components/LocaleContext";
import i18n from "../i18n";
import Loading from "../components/Loading";

function Landing() {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const Lpath = "LandingPage.";

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <div className={styles.container}>
          <LanguageSelect />

          <div className={styles.leftContainer}>
            <Card />
            <div className={styles.attribution}>
              Photo by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@ilgmyzin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >
                ilgmyzin
              </a>{" "}
              on{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >
                Unsplash
              </a>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <img className={styles.profilePic} src={Me} alt="KY" />
            <h3>{t(Lpath + "actionables.message")}</h3>
            <div className={styles.btnS}>
              <Link className={styles.btn} to="/main">
                <div>{t(Lpath + "actionables.Frontend")}</div>
              </Link>
              <Link className={styles.btn} to="/main/Design">
                <div>{t(Lpath + "actionables.Design")}</div>
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
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default Landing;
