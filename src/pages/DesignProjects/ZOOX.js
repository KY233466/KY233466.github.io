import styles from "./ZOOX.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ZOOXFlow from "../../pic/ZOOXFlow.png";
import ZOOXW1 from "../../pic/ZOOXW1.png";
import ZOOXW2 from "../../pic/ZOOXW2.png";
import ZOOXW3 from "../../pic/ZOOXW3.png";
import ZOOXW4 from "../../pic/ZOOXW4.png";
import ZOOXW5 from "../../pic/ZOOXW5.png";
import ZOOXMB1 from "../../pic/ZOOXMB1.png";
import ZOOXMB2 from "../../pic/ZOOXMB2.png";
import ZOOXMockups from "../../pic/ZOOXMockups.png";
import Figma from "../../pic/Figma.png";
import InCar from "../../pic/InCar.png"
import Demo from "../../pic/Demo.mov"

const Icons = [
  // {
  //   images: Figma,
  //   name: "Figma Icon",
  // },
  {
    images: InCar,
    name: "In car display location",
  },
];

const headerContent = [
  {
    title: "ZOOX Autonomous Vehicle In Car Display Design",
    detail:
      "Support and enhance the ride experience with interior display. Macbook Pro 14’ size interior display locating at the side of the seats. Focused on 'Safety', 'Error free', and 'Futuristic'.",
    projectType: "Hypothetical Class Project",
    myRole: "Project Owner",
    currentStatus: "Design phase done",
    Btn: false,
    BtnContent: null,
    IconImage: Icons,
  },
];

export default function ZOOX() {
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
          IconImage={value.IconImage}
        />
      ))}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Design Overview</div>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/proto/DAga5UHVYJggB43ACJZthg/ZOOX-deliverable-3?page-id=0%3A1&node-id=3%3A22&viewport=376%2C384%2C0.04&scaling=scale-down&starting-point-node-id=3%3A3"
        >
          View prototype in browser
        </a>
        <video
          style={{
            margin: "20px 0",
            width: "60vw",
            height: "36vw",
          }}
          controls="controls"
          width="50vw"
          height="30vw"
          name="Prototype Demo"
        >
          <source src={Demo} />
        </video>
      </div>

      <div className={styles.contentContainer1}>
        <div className={styles.subSections1}>
          <div className={styles.sectionHeader}>Flow chart</div>
          <img src={ZOOXFlow} alt="ZOOX flowchart" />
        </div>
        <div className={styles.subSections2}>
          <div className={styles.sectionHeader}>Wireframes</div>
          <div className={styles.wireframes}>
            <img src={ZOOXW1} alt="ZOOX Home page wireframe" />
            <img src={ZOOXW2} alt="ZOOX Home page wireframe" />
            <img src={ZOOXW3} alt="ZOOX Home page wireframe" />
            <img src={ZOOXW4} alt="ZOOX Home page wireframe" />
            <img src={ZOOXW5} alt="ZOOX Home page wireframe" />
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Mood Boards</div>
        <div className={styles.MBgroup}>
          <div className={styles.MBgroupColumn}>
            <img src={ZOOXMB1} alt="ZOOX Light Mood Board" />
            <h6>
              Moodboard 1. Light mode design that gives out a smart soft
              technology feeling as well as elegance with the bright and clean
              visual design. Mostly uses pastel colors to work as contrast to
              the background to aid information display.
            </h6>
          </div>
          <div className={styles.MBgroupColumn}>
            <img src={ZOOXMB2} alt="ZOOX Dard Mood Board" />
            <h6>
              Moodboard 2. Dark mode design that gives out a serious futuristic,
              technological ambiance. High saturation colors are used as
              contrast to the background to put emphasis on the displayed
              information.
            </h6>
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Mockups</div>
        <img
          style={{ width: "100%", marginTop: "20px" }}
          src={ZOOXMockups}
          alt="ZOOX Mockups"
        />
        {/* <div className={styles.wireframes}>
          <img src={ZOOXW1} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW2} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW3} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW4} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW5} alt="ZOOX Home page wireframe" />
        </div> */}
      </div>
    </div>
  );
}
