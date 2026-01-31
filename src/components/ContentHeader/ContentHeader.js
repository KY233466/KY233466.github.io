"use client";

import styles from "./ContentHeader.module.css";
import Meta from "../Meta/meta";
import { useTranslation } from "react-i18next";
import resolveAsset from "../../lib/resolveAsset";

export default function ContentHeader({ content }) {
  const {
    title,
    detail,
    projectType,
    myRole,
    currentStatus,
    currentStatusLink,
    IconImage,
    timeframe,
    tags = [],
  } = content;
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div>{detail}</div>
        {IconImage && (
          <div className={styles.IconGroup}>
            {IconImage?.map((value, index) => (
              <img
                key={index}
                className={styles.icon}
                src={resolveAsset(value.images)}
                alt={value.name}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.subContentGroup}>
          <div className={styles.subContent1}>
            <h5>
              <strong>{t("HeaderContent.ProjectType")}</strong>
            </h5>
            <div>{projectType}</div>
          </div>
          {myRole && (
            <div className={styles.subContent2}>
              <h5>
                <strong>{t("HeaderContent.MyRole")}</strong>
              </h5>
              <div>{myRole}</div>
            </div>
          )}
          <div className={styles.subContent3}>
            <h5>
              <strong>{t("HeaderContent.CurrentStatus")}</strong>
            </h5>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span>{currentStatus}</span>
            </div>
          </div>

          {currentStatusLink && (
            <div className={styles.subContent3}>
              <h5>
                <strong>Link</strong>
              </h5>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <a
                  href={currentStatusLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.statusLink}
                >
                  {currentStatusLink}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <Meta timeframe={timeframe} tags={tags} title={title} />
    </div>
  );
}
