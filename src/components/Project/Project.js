import { Suspense, useState } from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Project = ({ title, loading, index, path, content }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.container}>
        <Link to={path}>
          {loaded ? null : (
            <Skeleton variant="rounded" width={'100%'} height={'15rem'} />
          )}
          <img
            className={loaded ? styles.window : styles.windowNone}
            src={content}
            alt={title}
            onLoad={() => setLoaded(true)}
          />
          <div className={styles.title}>{title}</div>
        </Link>
    </div>
  );
};

export default Project;
