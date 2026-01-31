import styles from "./Footer.module.css";
import LinkedIn from "../../pic/LinkedIn.png";
import GitHub from "../../pic/GitHub.png";
import resolveAsset from "../../lib/resolveAsset";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.note}>Let&apos;s build thoughtful tools together</p>
          <span className={styles.meta}>© {year} Katie Yang</span>
        </div>
        <div className={styles.iconGroup}>
          <a
            href="https://www.linkedin.com/in/katie-yang-ky/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <img
              className={styles.icon}
              src={resolveAsset(LinkedIn)}
              alt="LinkedIn Icon"
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
      </div>
    </footer>
  );
};

export default Footer;
