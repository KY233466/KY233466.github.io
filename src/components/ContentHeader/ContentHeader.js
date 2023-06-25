import styles from "./ContentHeader.module.css";
import ViewFrontend from "../ViewFrontend/ViewFrontend";
import Figma from "../../pic/Figma.png";

export default function ContentHeader({
  title,
  index,
  detail,
  projectType,
  myRole,
  currentStatus,
  Btn,
  BtnContent,
  BtnLink,
  Icon,
  IconImage,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div>{detail}</div>
        {IconImage ? (
          <div className={styles.IconGroup}>
            {IconImage?.map((value, index) => (
              <img
                index={value.name}
                key={value.name}
                className={styles.icon}
                src={value.images}
                alt={value.name}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.subContentGroup}>
          <div className={styles.subContent1}>
            <h5>
              <strong>Project Type</strong>
            </h5>
            <div>{projectType}</div>
          </div>
          <div className={styles.subContent2}>
            <h5>
              <strong>My Role</strong>
            </h5>
            <div>{myRole}</div>
          </div>
          <div className={styles.subContent3}>
            <h5>
              <strong>Current Status</strong>
            </h5>
            <div>{currentStatus}</div>
          </div>
        </div>
        {Btn ? <ViewFrontend content={BtnContent} path={BtnLink} /> : null}
      </div>
    </div>
  );
}
