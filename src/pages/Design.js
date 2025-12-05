import { useState, useEffect } from "react";
import Project from "../components/Project/Project";
import styles from "../components/Design.module.css";
import JarneyRedesign from "../pic/JarneyRedesign.png";
import ZOOX from "../pic/ZOOX.png";
import KALEA from "../pic/KALEA.png";
import Hobbees from "../pic/Hobbees.png";
import Color from "../pic/Color.png";
import research from "../pic/Instagram.png";
import { useTranslation } from "react-i18next";
// import Skeleton from "react-loading-skeleton";
// import WhatColor from "../pic/Instagram.png";

const content = [
  {
    title: "ZOOX",
    path: "/Design/ZOOX",
    content: ZOOX,
  },
  {
    title: "WhatColor",
    path: "/Design/WhatColor",
    content: Color,
  },
  {
    title: "Jarney",
    path: "/Design/Jarney",
    content: JarneyRedesign,
  },
  // {
  //   title: "Hobbees Hobbby Sharing APP Design",
  //   path: "/main/Design/Hobbees",
  //   content: Hobbees,
  // },
  {
    title: "ActivityStatus",
    path: "/Design/ActivityStatus",
    content: research,
  },
];

export default function Design() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        // setVideos(dummyData);
        setLoading(false);
      }, 1000);
      // Cancel the timer while unmounting
      return () => clearTimeout(timer);
    }, []);


  return (
    <div className={styles.container}>
      {/* {loading &&
        content.map((value, index) => (
          <Project
            title={t(value.title + ".HeaderContent.title")}
            loading={true}
            index={value.index}
            key={value.title}
            path={value.path}
            content={value.content}
          />
        ))}
      {!loading &&
        content.map((value, index) => (
          <Project
            title={t(value.title + ".HeaderContent.title")}
            loading={false}
            index={value.index}
            key={value.title}
            path={value.path}
            content={value.content}
          />
        ))} */}
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
