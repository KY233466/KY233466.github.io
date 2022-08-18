import Project from "../components/Project/Project";
import styles from "../components/Design.module.css";
import JarneyRedesign from "../pic/JarneyRedesign.png"
import ZOOX from "../pic/ZOOX.png"
import KALEA from "../pic/KALEA.png"
import Hobbees from "../pic/Hobbees.png"

const content = [
  {
    title: "JARney Scheduler Page Redesign",
    path: "/app/Design/Jarney",
    content: JarneyRedesign,
  },
  {
    title: "ZOOX Autonomous Vehicle In Car Display",
    path: "/app/Design/ZOOX",
    content: ZOOX,
  },
  {
    title: "Hobbees Hobbby Sharing APP Design",
    path: "/app/Design/Hobbees",
    content: Hobbees,
  },
  {
    title: "Instagram Activity Status Study",
    path: "/app/Design/Jarney",
    content: KALEA,
  },
];

export default function Design() {
  return (
    <div className={styles.container}>
      {content.map((value, index) => (
        <Project
          title={value.title}
          index={value.index}
          key={value.title}
          path={value.path}
          content={value.content}
        />
      ))}
    </div>
  );
}
