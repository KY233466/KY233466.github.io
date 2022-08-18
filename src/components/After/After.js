import styles from "./After.module.css";
import JarneyAfter from "../../pic/JarneyRedesign.png";

export default function After({ index, summary, detail }) {
  return (
    <div className={styles.container}>
      <div className={styles.explain}>
        <div className={styles.title}>AFTER</div>
        <div className={styles.summary}>{summary}</div>
        <div className={styles.detail}>{detail}</div>
      </div>
      <img className={styles.img} src={JarneyAfter} alt="Redesign Result" />
    </div>
  );
}
