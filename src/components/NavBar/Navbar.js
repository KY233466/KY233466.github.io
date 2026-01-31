"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import NavBarToggle from "./NavBarToggle";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.brandBlock}>
          <Link href="/" className={styles.siteTitle}>
            {t("name")}
          </Link>
        </div>
        <NavBarToggle />
      </nav>
    </header>
  );
}
