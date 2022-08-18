import styles from "./ViewFrontend.module.css";
import { Link } from "react-router-dom";

const ViewFrontend = ({path, content}) => {
  return (
    <Link className={styles.btn} to={path}>
      <div> {content} </div>
    </Link>
  );
};

export default ViewFrontend;
