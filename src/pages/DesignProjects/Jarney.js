import React, { useState } from "react";
import styles from "./Jarney.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Before from "../../components/Before/Before";
import After from "../../components/After/After";
import { CSSTransition } from "react-transition-group";
import Analysis1 from "../../pic/Analysis_1.png";
import Analysis2 from "../../pic/Analysis2.png";
import Goals from "../../pic/Goals&Solutions.png";
import ViewFrontend from "../../components/ViewFrontend/ViewFrontend";

const headerContent = [
  {
    title: "JARney Scheduler Page Redesign",
    detail:
      "Re-design the currently fully functioning scheduler. It is a website that helps Tufts students to plan out their degree requirements, degree plan, and semesterly schedule.",
    projectType: "Student Club",
    myRole: "Front-end Team Member, Project Owner",
    currentStatus:
      "The change in code (React based) is implemented in QA branch, but haven’t merge into Master",
    Btn: true,
    BtnContent: "View Frontend Implementation",
    BtnLink: "/app/Jarney",
  },
];

const beforeContent = [
  {
    summary:
      "Compact information, Hard-To-See Course Tab, Inefficient Use of Space",
    detail:
      "Selected Courses, Degree Requirements, and Degree Plan shares the same space when each of them contains a lot of information.",
  },
];

const afterContent = [
  {
    summary: "This is after",
    detail:
      "Selected Courses, Degree Requirements, and Degree Plan shares the same space when each of them contains a lot of information.",
  },
];

export default function Jarney() {
  const pathName = "/app/Jarney";
  const Errr = "hmm";

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [isShowingAlert, setShowingAlert] = useState(false);

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
          BtnContent={value.BtnContent}
          BtnLink={value.BtnLink}
        />
      ))}

      <div className={styles.contentContainer}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>Result Overview</div>
          <div>Hover to see change</div>
          {showButton && (
            <div className={styles.hmmm}>
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
            </div>
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
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>Analysis</div>
          <img className={styles.img} src={Analysis1} alt={Analysis1} />
          <img className={styles.img} src={Analysis2} alt={Analysis2} />
        </div>

        <div className={styles.wideSection}>
          <div className={styles.sectionHeader}>Goals & Solutions</div>
          <img className={styles.GoalsImg} src={Goals} alt={Analysis2} />
        </div>
      </div>

      <ViewFrontend path={pathName} />
    </div>
  );
}
