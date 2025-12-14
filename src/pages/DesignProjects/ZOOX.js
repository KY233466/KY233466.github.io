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
import InitialIdelDisplay from "../../pic/Initial&Idel display.png";
import InitialIdleDisplayAfter from "../../pic/Initial&IdleDisplayAfter.png";
import Home from "../../pic/Home Page.png";
import HomeAfter from "../../pic/HomeAfter.png";
import Figma from "../../pic/Figma.png";
import InCar from "../../pic/InCar.png";
import Demo from "../../pic/Demo.mov";
import { useTranslation } from "react-i18next";
import NeedAnalysis from "../../components/NeedAnalysis";

const Icons = [
  {
    images: InCar,
    name: "In car display location",
  },
];

const HCpath = 'ZOOX.HeaderContent.';
const DOpath = "ZOOX.DesignOverview.";
const FRpath = "ZOOX.FunctionalRequirements.";
const IFpath = "ZOOX.InitialFeature.";
const Mpath = "ZOOX.Moodboard.";
const Ipath = "ZOOX.Iteration.";

export default function ZOOX() {
  const { t } = useTranslation();

  const headerContent = {
    title: t(HCpath + "title"),
    detail: t(HCpath + "detail"),
    projectType: t(HCpath + "projectType"),
    myRole: t(HCpath + "myRole"),
    currentStatus: t(HCpath + "currentStatus"),
    Btn: false,
    IconImage: Icons,
  };

  return (
    <div className={styles.container}>
      <ContentHeader content={headerContent} />
      
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>{t(DOpath + "title")}</div>
        {/* <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/proto/DAga5UHVYJggB43ACJZthg/ZOOX-deliverable-3?page-id=0%3A1&node-id=3%3A22&viewport=376%2C384%2C0.04&scaling=scale-down&starting-point-node-id=3%3A3"
        >
          View prototype in browser
        </a> */}
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          href="https://www.figma.com/proto/DAga5UHVYJggB43ACJZthg/ZOOX-deliverable-3?page-id=0%3A1&node-id=3%3A22&viewport=376%2C384%2C0.04&scaling=scale-down&starting-point-node-id=3%3A3"
        >
          {t(DOpath + "detail")}
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

      <div className={styles.sectionHeader}>{t(FRpath + "title")}</div>
      <NeedAnalysis path="ZOOX.FunctionalRequirements." />

      <div className={styles.sectionHeader}>{t(IFpath + "title")}</div>
      <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <div>
          <ul style={{ paddingTop: "20px" }}>
            <li style={{ paddingBottom: "10px" }}>
              {t(IFpath + "list.safety.title")}
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.safety.content.detail1")}
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.safety.content.detail2")}
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IFpath + "list.status.title")}
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.status.content.detail1")}
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.status.content.detail2")}
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IFpath + "list.ride.title")}
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.ride.content.detail1")}
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.ride.content.detail2")}
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <ul style={{ paddingTop: "20px" }}>
            <li style={{ paddingBottom: "10px" }}>
              {t(IFpath + "list.control.title")}
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.control.content.detail1")}
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IFpath + "list.entertainment.title")}
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.entertainment.detail1")}
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IFpath + "list.PreventAccidents.title")}
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  {t(IFpath + "list.PreventAccidents.detail1")}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.sectionHeader}>
        {t("ZOOX.FunctionChecklist.title")}
      </div>
      <NeedAnalysis path="ZOOX.FunctionChecklist." />
      {/* <div className={styles.contentContainer1}>
        <div className={styles.subSections2}>
          <div className={styles.sectionHeader}>初始功能清单</div>
          <ul style={{ paddingTop: "20px" }}>
            <li style={{ paddingBottom: "10px" }}>
              安全类
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  行程开始前的安全说明
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  紧急情况报告、工作人员进行视频连线
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              显示ZOOX的运行状态
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  显示车辆的计算机视觉都识别到了什么物体
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  从车辆的角度，当前路段是什么样子
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              打车服务有关功能
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  当前位置、剩余多少时间
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  更改目的地、取消本次旅程等
                </li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              车内控制
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>调节空调温度、座椅等</li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              娱乐
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>音乐播放</li>
              </ul>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              防误触机制
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>屏保</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.subSections1}>
          <div className={styles.sectionHeader}>流程图</div>
          <img src={ZOOXFlow} alt="ZOOX flowchart" />
        </div>
      </div> */}
      {/* <div className={styles.contentContainer1}>
        <div className={styles.subSections1}>
          <div className={styles.sectionHeader}>Flow chart</div>
          <div className={styles.sectionHeader}>流程图</div>
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
      </div> */}
      <div className={styles.contentContainer}>
        {/* <div className={styles.sectionHeader}>Mood Boards</div> */}
        <div className={styles.sectionHeader}>{t(Mpath + "title")}</div>
        <div style={{ padding: "20px 0" }}>{t(Mpath + "detail")}</div>
        <div className={styles.MBgroup}>
          <div className={styles.MBgroupColumn}>
            <img src={ZOOXMB1} alt="ZOOX Light Mood Board" />
            <h6>{t(Mpath + "description1")}</h6>
          </div>
          <div className={styles.MBgroupColumn}>
            <img src={ZOOXMB2} alt="ZOOX Dard Mood Board" />
            <h6>{t(Mpath + "description2")}</h6>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        {/* <div className={styles.sectionHeader}>Wire Frames</div> */}
        <div className={styles.sectionHeader}>{t("ZOOX.Wireframes.title")}</div>
        <div className={styles.wireframes}>
          <img src={ZOOXW1} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW2} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW3} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW4} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW5} alt="ZOOX Home page wireframe" />
        </div>
      </div>
      {/* <div className={styles.sectionHeader}>Mockups</div> */}
      <div className={styles.sectionHeader}>{t("ZOOX.Prototypes.title")}</div>
      <img
        style={{ width: "100%", marginTop: "20px" }}
        src={ZOOXMockups}
        alt="ZOOX Mockups"
      />
      <div className={styles.sectionHeader}>{t(Ipath + "title")}</div>
      <div style={{ fontWeight: "900", fontSize: "25px", color: "#2F76B5" }}>
        {t(Ipath + "changes.title")}
      </div>
      <ul style={{ paddingTop: "20px", width: "65%" }}>
        <li style={{ paddingBottom: "10px" }}>
          {t(Ipath + "changes.description.text1")}
        </li>
        <li style={{ paddingBottom: "10px" }}>
          {t(Ipath + "changes.description.text2")}
        </li>
        <li style={{ paddingBottom: "10px" }}>
          {t(Ipath + "changes.description.text3")}
        </li>
        <li style={{ paddingBottom: "10px" }}>
          {t(Ipath + "changes.description.text4")}
        </li>
      </ul>
      <div
        style={{
          fontWeight: "900",
          fontSize: "25px",
          color: "#2F76B5",
          paddingBottom: "20px",
        }}
      >
        {t(Ipath + "FinalResult.title")}
      </div>
      <a
        className={styles.link}
        target="_blank"
        rel="noreferrer"
        href="https://www.figma.com/proto/DAga5UHVYJggB43ACJZthg/ZOOX-deliverable-3?page-id=0%3A1&node-id=3%3A22&viewport=376%2C384%2C0.04&scaling=scale-down&starting-point-node-id=3%3A3"
      >
        {t(Ipath + "FinalResult.detail")}
      </a>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "30px",
            paddingTop: "20px",
          }}
        >
          <img
            style={{ width: "35%" }}
            src={InitialIdelDisplay}
            alt="Initial Idle Display After"
          />
          <div style={{ padding: "30px" }}>➡</div>
          <img
            style={{ width: "35%" }}
            src={InitialIdleDisplayAfter}
            alt="Initial Idle Display After"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          <img style={{ width: "35%" }} src={Home} alt="Home" />
          <div style={{ padding: "30px" }}>➡</div>
          <img style={{ width: "35%" }} src={HomeAfter} alt="Home After" />
        </div>
      </div>
    </div>
  );
}
