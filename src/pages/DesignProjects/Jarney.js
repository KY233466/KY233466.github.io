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
import Figma from "../../pic/Figma.png";

const Icons = [
  {
    images: Figma,
    name: "Figma Icon",
  },
];

const headerContent = [
  {
    title:
      "课程组合生成器重新设计 + 更改前端代码 JARney Scheduler Page Redesign",
    detail:
      "这是一个帮助塔夫茨大学(Tufts University)的学生们规划他们的学位要求、学位计划和学期时间表的网站。改变功能位置使工作流程更加合理，实现更好的空间利用效率。使用更高对比度的颜色来强调信息的层次结构，使关键信息更加瞩目。按照最新设计完成项目代码更改。Re-design the currently fully functioning scheduler. It is a website that helps Tufts students to plan out their degree requirements, degree plan, and semesterly schedule.",
    projectType: "Student Club",
    myRole: "Front-end Team Member, Project Owner",
    currentStatus:
      "The change in code (React based) is implemented in QA branch, but haven’t merge into Master",
    Btn: true,
    BtnContent: "View Frontend Implementation",
    BtnLink: "/Jarney",
    IconImage: null,
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
    summary:
      "Distinct separation of functionality, easy to see key information",
    detail: "",
  },
];

export default function Jarney() {
  const pathName = "/Jarney";
  const BtnContent = "View Frontend Implementation";

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  function handleBtn() {
    setShowMessage(true);
    setShowButton(false);
  }

  function handleMessage() {
    setShowMessage(false);
    setShowButton(true);
  }

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
          IconImage={value.IconImage}
        />
      ))}

      <div className={styles.contentContainer}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>Result Overview</div>
          <div>Hover or Click to see change</div>
          {showButton && (
            <div className={styles.hmmm}>
              <button
                className={styles.noBtn}
                onClick={handleBtn}
                onMouseOver={handleBtn}
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

          {/* <CSSTransition
            in={showMessage}
            timeout={100}
            classNames={styles.alert}
            unmountOnExit
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
          > */}
          {showMessage && (
            <button
              className={styles.noBtn}
              onMouseOut={handleMessage}
              onClick={handleMessage}
              // onEnter={() => setShowButton(false)}
              // unmountOnExit
              // onExited={() => setShowButton(true)}
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
          )}
          {/* </CSSTransition> */}
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>Analysis</div>
          <div className={styles.Annotation}>
            <div>
              <img className={styles.img} src={Analysis1} alt={Analysis1} />
            </div>
            <ul>
              <li>Too much information on the left column</li>
              <li>
                <span className={styles.red}>Inefficient use of space</span>
              </li>
              <li>
                <span className={styles.green}>
                  Sections with similar logic should be grouped
                </span>
              </li>
              <li>
                <span className={styles.blue}>
                  Functions in the left column doesn't follow work flow
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.Annotation}>
            <div>
              <img className={styles.img} src={Analysis2} alt={Analysis2} />
            </div>
            <ul>
              <li>
                <span className={styles.red}>
                  Course specifics should be more eye catching
                </span>
              </li>
              <li>
                <span className={styles.blue}>
                  Individual classes isn't the focal point because of the pale
                  background
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.wideSection}>
          <div className={styles.sectionHeader}>Goals & Solutions</div>
          <img className={styles.GoalsImg} src={Goals} alt={Analysis2} />
        </div>
      </div>

      <ViewFrontend content={BtnContent} path={pathName} />
    </div>
  );
}
