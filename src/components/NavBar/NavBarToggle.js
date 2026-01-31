"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./NavBar.module.css";

export default function NavBarToggle() {
  const { t } = useTranslation();
  const Lpath = "LandingPage.";

  return (
    <div>
      <ul className={styles.links}>
        <CustomLink href="/">{t(Lpath + "actionables.Frontend")}</CustomLink>
        <CustomLink href="/Design">{t(Lpath + "actionables.Design")}</CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({ href, children, ...props }) {
  const pathname = usePathname();

  const isActive =
    href === "/" ? !pathname.startsWith("/Design") : pathname.startsWith(href);

  return (
    <li className={isActive ? styles.active : ""}>
      <Link href={href} {...props}>
        <span>{children}</span>
      </Link>
    </li>
  );
}
