import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({ title, index, path, content }) => {
  return (
    <div className={styles.container}>
      <Link to={path}>
        <img className={styles.window} src={content} alt={title} />
        <div className={styles.title}>{title}</div>
      </Link>
    </div>
  );
};

export default Project;
