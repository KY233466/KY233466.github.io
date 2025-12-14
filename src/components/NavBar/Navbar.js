import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBarToggle from "./NavBarToggle";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const { t } = useTranslation();
  const Lpath = "LandingPage.";

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.brandBlock}>
          <Link to="/" className={styles.siteTitle}>
            {t("name")}
          </Link>
          <span className={styles.tagline}>
            {t("LandingPage.actionables.messageShort", {
              defaultValue: "Engineering × Design Portfolio",
            })}
          </span>
        </div>
        <NavBarToggle/>
      </nav>
    </header>
  );
}
