import Project from "../components/Project/Project";
import styles from "../components/Design.module.css";
import JarneyRedesign from "../pic/JarneyRedesign.png";
import ZOOX from "../pic/ZOOX.png";
import KALEA from "../pic/KALEA.png";
import Hobbees from "../pic/Hobbees.png";
import Color from "../pic/Color.png";
import research from "../pic/Instagram.png";
import { useTranslation } from "react-i18next";
// import WhatColor from "../pic/Instagram.png";

const content = [
  {
    title: "ZOOX",
    path: "/main/Design/ZOOX",
    content: ZOOX,
  },
  {
    title: "WhatColor",
    path: "/main/Design/WhatColor",
    content: Color,
  },
  {
    title: "Jarney",
    path: "/main/Design/Jarney",
    content: JarneyRedesign,
  },
  // {
  //   title: "Hobbees Hobbby Sharing APP Design",
  //   path: "/main/Design/Hobbees",
  //   content: Hobbees,
  // },
  {
    title: "ActivityStatus",
    path: "/main/Design/ActivityStatus",
    content: research,
  },
];

export default function Design() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {content.map((value, index) => (
        <Project
          title={t(value.title + ".HeaderContent.title")}
          index={value.index}
          key={value.title}
          path={value.path}
          content={value.content}
        />
      ))}
    </div>
  );
}