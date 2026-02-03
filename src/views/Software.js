import Project from "../components/Project/Project";
import styles from "./F&D.module.css";
import ColorUnclasher from "../pic/ColorUnclasher.png";
import Advising from "../pic/advisingCover.jpg";
import Flashcard from "../pic/flashcardCover.jpg";
import TextWarp from "../pic/TextWarp.png";
import LinkedInNotion from "../pic/LinkedInNotionPic.png";
import IntroCard from "../components/IntroCard/IntroCard";

const content = [
  {
    title: "Save LinkedIn → Notion: Zero-Backend CRM Helper",
    path: "/LinkedIn-to-Notion",
    content: LinkedInNotion,
    timeframe: "Nov 2025 · Published Chrome Extension",
    tags: ["React", "Chrome Extension", "Notion API"],
  },
  {
    title: "🏆 AI Track Winner: AI Flashcard Maker",
    path: "/Flashcard",
    content: Flashcard,
    timeframe: "July 2025 - Present · Adobe Express Add-ons Hackathon (3,345 participants)",
    tags: ["GenAI", "React", "Python", "JavaScript", "Flask", "Google Cloud", "Babel"],
  },
  {
    title: "💡 TextWarp: Creative Text Effects for Adobe Express",
    path: "/TextWarp",
    content: TextWarp,
    timeframe: "July 2025 · Selected by Adobe Fund for Design",
    tags: ["JavaScript", "opentype.js", "warp.js"],
  },
  {
    title: "🏆 Track Winner: AI-Enhanced Academic Advising",
    path: "/Advising",
    content: Advising,
    timeframe: "March 2025 - June 2025 · JumboHack",
    tags: ["GenAI", "React", "Azure", "Python", "JavaScript", "Flask", "MongoDB Atlas", "OAuth 2.0"],
  },
  {
    title: "Google Summer of Code '24: Color Unclasher",
    path: "/ColorUnclasher",
    content: ColorUnclasher,
    timeframe: "June 2024 - August 2024 · Google Summer of Code",
    tags: ["Published NPM Package", "JavaScript", "Maplibre", "Accessibility"],
  },
];

export default function About() {
  return (
    <div className={styles.container}>
      <IntroCard/>

      <header className={styles.pageIntro}>
        <h2 className={styles.introTitle}>Shaping resilient, human-centered tools.</h2>
        <p className={styles.introBody}>
          A snapshot of products and experiments where I obsess over polish, data, and quiet
          utility. Each build is a chance to pair rigorous engineering with a designer’s
          eye for clarity.
        </p>
      </header>
      {content.map((value, index) => (
        <Project
          title={value.title}
          key={index}
          path={value.path}
          content={value.content}
          timeframe={value.timeframe}
          tags={value.tags}
        />
      ))}
    </div>
  );
}
