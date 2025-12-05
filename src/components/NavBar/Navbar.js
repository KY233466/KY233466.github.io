import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect"
import styles from "./NavBar.module.css";

export default function Navbar() {
    const { t } = useTranslation();
    const Lpath = "LandingPage.";

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        {t("name")}
      </Link>
      <ul>
        <CustomLink to="/SDE">{t(Lpath + "actionables.Frontend")}</CustomLink>
        <CustomLink to="/Design">
          {t(Lpath + "actionables.Design")}
        </CustomLink>
        <LanguageSelect
          newStyle={{
            top: "10px",
            position: "block",
            backgroundColor: "#1d2232",
          }}
        />
        {/* <CustomLink to="/main/resume">Resume</CustomLink> */}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
