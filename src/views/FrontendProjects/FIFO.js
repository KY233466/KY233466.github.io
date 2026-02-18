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
    name: "TypeScript Icon",
  },
  {
    images: ReduxIcon,
    name: "Redux Icon",
  },
];

const headerContent = {
  title: "FIFO Office Hour Queue",
  detail: "A queue management solution for TA office hours. A freshly started project.",
  projectType: "Student Club",
  myRole: "Front-end Team Lead",
  currentStatus: "Creating the pages while waiting for backend to be established",
  Btn: false,
  Icon: true,
  IconImage: Icons,
};

export default function FIFO() {
  return (
    <div className={styles.container}>
      <ContentHeader content={headerContent} />
    </div>
  );
}
