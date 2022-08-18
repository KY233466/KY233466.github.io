import styles from "./Hobbees.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";

const headerContent = [
  {
    title: "Hobbees Hobby Sharing APP Design",
    detail:
      "Support and enhance the ride experience with interior display. Macbook Pro 14’ size interior display locating at the side of the seats",
    projectType: "Hypothetical Class Project",
    myRole: "Team member in a group of 4",
    currentStatus: "Design phase done",
    Btn: false,
    BtnContent: null,
  },
];

export default function Hobbees() {
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
        />
      ))}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Design Overview</div>
        {/* <a
          className={styles.link}
          href="https://www.figma.com/proto/DAga5UHVYJggB43ACJZthg/ZOOX-deliverable-3?page-id=0%3A1&node-id=2%3A266&starting-point-node-id=3%3A3&scaling=scale-down"
        >
          View prototype in browser
        </a> */}
        <div
          style={{
            margin: "20px 0",
            width: "50vw",
            height: "30vw",
            backgroundColor: "pink",
          }}
        ></div>
      </div>
    </div>
  );
}
