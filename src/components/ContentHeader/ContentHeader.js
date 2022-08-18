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
}) {

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div>{detail}</div>
        <img className={styles.icon} src={Figma} alt="Figma Logo" />
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.subContent1}>
          <h5>Project Type</h5>
          <div>{projectType}</div>
        </div>
        <div className={styles.subContent2}>
          <h5>My Role</h5>
          <div>{myRole}</div>
        </div>
        <div className={styles.subContent3}>
          <h5>Current Status</h5>
          <div>{currentStatus}</div>
        </div>
        {Btn ? <ViewFrontend content={BtnContent} path={BtnLink} /> : null}
      </div>
    </div>
  );
}
