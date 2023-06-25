import styles from "./Footer.module.css";
import LinkedIn from "../../pic/LinkedIn.png";
import GitHub from "../../pic/Github.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconGroup}>
        <a
          href="https://www.linkedin.com/in/katie-yang-2a863915b/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <img className={styles.icon} src={LinkedIn} alt="LinkedIn Icon" />
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
  );
};

export default Footer;
