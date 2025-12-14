import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./NavBar.module.css";

export default function NavBarToggle() {
  const { t } = useTranslation();
  const Lpath = "LandingPage.";

  return (
    <div>
        <ul className={styles.links}>
        <CustomLink to="/SDE">
            {t(Lpath + "actionables.Frontend")}
        </CustomLink>
        <CustomLink to="/Design">
            {t(Lpath + "actionables.Design")}
        </CustomLink>
        </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} {...props}>
        <span>{children}</span>
      </Link>
    </li>
  );
}
