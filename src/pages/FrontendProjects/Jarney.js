import React, { useState } from "react";
import styles from "./Jarney.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";

const headerContent = [
  {
    title: "JARney Scheduler Page Code",
    detail: "Implement the change in code",
    projectType: "Student Club",
    myRole: "Front-end Team Member, Project Owner",
    currentStatus:
      "The change in code (React based) is done implemented in the QA branch, but haven’t merge into Master",
    Btn: true,
    BtnContent: "View Redesign Process",
    BtnLink: "/Design/Jarney",
  },
];

export default function Jarney() {
  return (
    <div className={styles.container}>
      <ContentHeader content={headerContent}/>
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
