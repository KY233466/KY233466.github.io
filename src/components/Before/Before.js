import styles from "./Before.module.css";
import JarneyBefore from "../../pic/JarneyBefore.png";

export default function Before({ index, summary, detail }) {
  return (
    <div className={styles.container}>
      <div className={styles.explain}>
        <div className={styles.title}>BEFORE</div>
        <div className={styles.summary}>{summary}</div>
        <div className={styles.detail}>{detail}</div>
      </div>
      <img className={styles.img} src={JarneyBefore} alt="Redesign Result" />
    </div>
  );
}
