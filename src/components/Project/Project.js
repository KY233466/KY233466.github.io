import { useState } from "react";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Meta from "../Meta/meta";

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
        <Meta timeframe={timeframe} tags={tags} title={title} />
        </Link>
    </div>
  );
};

export default Project;
