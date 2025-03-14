import styles from "./Hobbees.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Figma from "../../pic/Figma.png";
import HDemo from "../../pic/HDemo.mov";

const Icons = [
  {
    images: Figma,
    name: "Figma Logo",
  },
];

const headerContent = 
  {
    title: "Hobbees Hobby Sharing APP Design",
    detail: "A casual skill share app based on hobbies",
    projectType: "Hypothetical Class Project",
    myRole: "Team member in a group of 4",
    currentStatus: "Design phase done",
    Btn: false,
    BtnContent: null,
    IconImage: Icons,
  };

export default function Hobbees() {
  return (
    <div className={styles.container}>
      <ContentHeader
        index={headerContent.index}
        key={headerContent.title}
        title={headerContent.title}
        detail={headerContent.detail}
        myRole={headerContent.myRole}
        projectType={headerContent.projectType}
        currentStatus={headerContent.currentStatus}
        Btn={headerContent.Btn}
        BtnContent={headerContent.BtnContent}
        IconImage={headerContent.IconImage}
      />
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Design Overview</div>
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/proto/1uQTEHB8Xf2oaUYmdMo8J0/Hobbees?page-id=314%3A2438&node-id=332%3A5573&viewport=-71%2C484%2C0.45&scaling=scale-down&starting-point-node-id=332%3A5573"
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
          <source src={HDemo} />
        </video>
      </div>
    </div>
  );
}
