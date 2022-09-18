import React, { useState } from "react";
import styles from "./Jarney.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ReactIcon from "../../pic/React.png";
import TypeScriptIcon from "../../pic/TypeScript.png";
import ReduxIcon from "../../pic/ReduxIcon.png";


const Icons = [
  {
    images: ReactIcon,
    name: "React Icon",
  },
  {
    images: TypeScriptIcon,
    name: "React Icon",
  },
  {
    images: ReduxIcon,
    name: "React Icon",
  },
];

const headerContent = [
  {
    title: "FIFO Office Hour Queue",
    detail: "A queue management solution for TA office hours. A freshly started project.",
    projectType: "Student Club",
    myRole: "Front-end Team Lead",
    currentStatus: "Creating the pages while waiting for backend to be established",
    Btn: false,
    Icon: true,
    IconImage: Icons,
  },
];

export default function FIFO() {

  return (
    <div className={styles.container}>
      {headerContent.map((value, index) => (
        <ContentHeader
          index={value.index}
          key={value.title}
          title={value.title}
          detail={value.detail}
          myRole={value.myRole}
          projectType={value.projectType}
          currentStatus={value.currentStatus}
          Btn={value.Btn}
          Icon={value.Icon}
          IconImage={value.IconImage}
        />
      ))}
      {/* <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Result Overview</div>
        <div>Hover to see change</div>
        {showButton && (
          <button
            className={styles.noBtn}
            onMouseOver={() => setShowMessage(true)}
          >
            {beforeContent.map((value, index) => (
              <Before
                index={value.index}
                key={value.summary}
                summary={value.summary}
                detail={value.detail}
              />
            ))}
          </button>
        )}

        <CSSTransition
          in={showMessage}
          timeout={100}
          classNames={styles.alert}
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <button
            className={styles.noBtn}
            onMouseOut={() => setShowMessage(false)}
          >
            {afterContent.map((value, index) => (
              <After
                index={value.index}
                key={value.summary}
                summary={value.summary}
                detail={value.detail}
              />
            ))}
          </button>
        </CSSTransition>
      </div> */}
    </div>
  );
}
