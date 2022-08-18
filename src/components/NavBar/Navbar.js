import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function Navbar() {

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        Katie Yang
      </Link>
      <ul>
        <CustomLink to="/app">
          Front-end
        </CustomLink>
        <CustomLink to="/app/Design">
          UI/UX
        </CustomLink>
        <CustomLink to="/app/resume">
          Resume
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ lol, uh, to, children, ...props }) {
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
