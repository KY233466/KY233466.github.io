import Project from "../components/Project/Project";
import styles from "../components/Design.module.css";
import JarneyRedesign from "../pic/JarneyRedesign.png"
import ZOOX from "../pic/ZOOX.png"
import KALEA from "../pic/KALEA.png"
import Hobbees from "../pic/Hobbees.png"
import research from "../pic/Instagram.png"

const content = [
  {
    title: "JARney Scheduler Page Redesign",
    path: "/main/Design/Jarney",
    content: JarneyRedesign,
  },
  {
    title: "ZOOX Autonomous Vehicle In Car Display",
    path: "/main/Design/ZOOX",
    content: ZOOX,
  },
  {
    title: "Hobbees Hobbby Sharing APP Design",
    path: "/main/Design/Hobbees",
    content: Hobbees,
  },
  {
    title: "Activity Status Study",
    path: "/main/Design/ActivityStatus",
    content: research,
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
