import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./NavBar.module.css";

export default function NavBarToggle() {
  const { t } = useTranslation();
  const Lpath = "LandingPage.";

  return (
    <div>
        <ul className={styles.links}>
        <CustomLink to="/">
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
  const location = useLocation();
  const pathname = location.pathname;

  const isActive =
    to === "/"
      ? !pathname.startsWith("/Design")
      : pathname.startsWith(to);

  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} {...props}>
        <span>{children}</span>
      </Link>
    </li>
  );
}
