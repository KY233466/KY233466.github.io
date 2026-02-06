"use client";

import Project from "../components/Project/Project";
import styles from "./F&D.module.css";
import JarneyRedesign from "../pic/JarneyRedesign.png";
import ZOOX from "../pic/ZOOX.png";
import Color from "../pic/Color.png";
import { useTranslation } from "react-i18next";

const content = [
  {
    title: "ZOOX",
    path: "/Design/ZOOX",
    content: ZOOX,
    timeframe: "March 2022 · Computer Interface Design Class Project",
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
    timeframe: "Nov 2021 · Intro to Human Factors Engineering Class Project",
    tags: ["3D Printing", "Accessibility"],
  },
];

export default function Design() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.pageIntro}>
        <h1 className={styles.introTitle}>
          Design explorations from my earlier training.
        </h1>
        <p className={styles.introBody}>
          These projects are from a while back, but I keep them here to show the
          design background that helps me collaborate naturally with designers.
          I studied topics like Intro to Human Factors Engineering and Computer
          Interface Design, so I can speak the same language when we’re refining
          an experience together.
        </p>
      </header>
      {content.map((value) => (
        <Project
          title={t(value.title + ".HeaderContent.title")}
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
