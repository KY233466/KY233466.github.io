"use client";

import { useState } from "react";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import styles from "./Project.module.css";
import Meta from "../Meta/meta";
import resolveAsset from "../../lib/resolveAsset";

const Project = ({ title, path, content, timeframe, tags = [] }) => {
  const [loaded, setLoaded] = useState(false);
  const imageSrc = resolveAsset(content);

  return (
    <div className={styles.container}>
      <Link href={path}>
        <div className={styles.mediaWrapper}>
          {!loaded && (
            <Skeleton variant="rounded" className={styles.skeleton} />
          )}

          <img
            className={styles.image}
            src={imageSrc}
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
