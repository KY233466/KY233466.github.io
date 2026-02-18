import styles from "./Jarney.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";

const headerContent = {
  title: "JARney Scheduler Page Code",
  detail: "Implement the change in code",
  projectType: "Student Club",
  myRole: "Front-end Team Member, Project Owner",
  currentStatus:
    "The change in code (React based) is done implemented in the QA branch, but haven’t merge into Master",
  Btn: true,
  BtnContent: "View Redesign Process",
  BtnLink: "/Design/Jarney",
};

export default function Jarney() {
  return (
    <div className={styles.container}>
      <ContentHeader content={headerContent} />
    </div>
  );
}
