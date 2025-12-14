import { useState } from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Project = ({ title, path, content, timeframe, tags = [] }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.container}>
        <Link to={path}>
         <div className={styles.mediaWrapper}>
          {!loaded && 
            <Skeleton
              variant="rounded"
              className={styles.skeleton}
            />}

          <img
            className={styles.image}
            src={content}
            alt={title}
            onLoad={() => setLoaded(true)}
          />
        </div>

        <div className={styles.title}>{title}</div>
        <div className={styles.meta}>
          {timeframe && <span className={styles.timeframe}>{timeframe}</span>}
          {tags?.length ? (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <span key={`${title}-${tag}`} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        </Link>
    </div>
  );
};

export default Project;
