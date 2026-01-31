import Link from "next/link";
import styles from "./ViewFrontend.module.css";

const ViewFrontend = ({ path, content }) => {
  return (
    <Link className={styles.btn} href={path}>
      <div>{content}</div>
    </Link>
  );
};

export default ViewFrontend;
