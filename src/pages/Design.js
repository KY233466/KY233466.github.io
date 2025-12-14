import Project from "../components/Project/Project";
import styles from "./F&D.module.css";
import JarneyRedesign from "../pic/JarneyRedesign.png";
import ZOOX from "../pic/ZOOX.png";
import Color from "../pic/Color.png";
import research from "../pic/Instagram.png";
import { useTranslation } from "react-i18next";

const content = [
  {
    title: "ZOOX",
    path: "/Design/ZOOX",
    content: ZOOX,
    timeframe: "March 2022 · Class Project",
    tags: ["Figma", "UI Systems", "UX"],
  },
  {
    title: "Jarney",
    path: "/Design/Jarney",
    content: JarneyRedesign,
    timeframe: "Dec 2021 - July 2022 · Student Tool",
    tags: ["Service Design", "Scheduling", "Prototyping"],
  },
  {
    title: "WhatColor",
    path: "/Design/WhatColor",
    content: Color,
    timeframe: "Nov 2021 · Class Project",
    tags: ["3D Printing", "Accessibility"],
  },
  // {
  //   title: "Hobbees Hobbby Sharing APP Design",
  //   path: "/main/Design/Hobbees",
  //   content: Hobbees,
  // },
  // {
  //   title: "ActivityStatus",
  //   path: "/Design/ActivityStatus",
  //   content: research,
  //   timeframe: "2020 · Concept",
  //   tags: ["Mobile", "Wellness", "Product Strategy"],
  // },
];

export default function Design() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* <header className={styles.pageIntro}>
        <h2 className={styles.introTitle}>
          Explorations that balance craft with systems thinking.
        </h2>
        <p className={styles.introBody}>
          From speculative UX to shipped improvements, these studies are anchored in
          research, accessibility, and motion—mirroring the calm, confident tone of Attio’s
          studio.
        </p>
      </header> */}
      {content.map((value, index) => (
        <Project
          title={t(value.title + ".HeaderContent.title")}
          index={value.index}
          key={value.title}
          path={value.path}
          content={value.content}
          timeframe={value.timeframe}
          tags={value.tags}
        />
      ))}
    </div>
  );
}
