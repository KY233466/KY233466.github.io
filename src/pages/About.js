import Project from "../components/Project/Project"
import styles from "../components/FrontEnd.module.css";
import JarneyDesign from "../pic/JarneyDesign.png";
import FIFO from "../pic/FIFOCover.png"

const content = [
  {
    title: "JARney Scheduler Page Code",
    path: "/app/Jarney",
    content: JarneyDesign,
  },
  {
    title: "FIFO Office Hour Queue",
    path: "/app/FIFO",
    content: FIFO,
  },
];

export default function About() {
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
