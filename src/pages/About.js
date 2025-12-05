import Project from "../components/Project/Project";
import styles from "../components/FrontEnd.module.css";
import JarneyDesign from "../pic/JarneyDesign.png";
import FIFO from "../pic/FIFOCover.png";
import ColorUnclasher from "../pic/ColorUnclasher.png";
import Advising from "../pic/advisingCover.jpg";
import Flashcard from "../pic/flashcardCover.jpg";
import LinkedInNotion from "../pic/LinkedInNotionPic.png";

const content = [
  {
    title: "Save LinkedIn → Notion: Zero-Backend CRM Helper",
    path: "/LinkedIn-to-Notion",
    content: LinkedInNotion,
  },
  {
    title: "🏆 AI Track Winner: AI Flashcard Maker (Adobe Express Add-ons Hackathon)",
    path: "/Flashcard",
    content: Flashcard,
  },
  {
    title: "🏆 Tracker Winner: AI-Enhanced Academic Advising (JumboHack)",
    path: "/Advising",
    content: Advising,
  },
  {
    title: "Google Summer of Code '24: Color Unclasher",
    path: "/ColorUnclasher",
    content: ColorUnclasher,
  },
  {
    title: "JARney Scheduler Page Code",
    path: "/Jarney",
    content: JarneyDesign,
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
