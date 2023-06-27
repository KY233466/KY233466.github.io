import styles from "./Hobbees.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Figma from "../../pic/Figma.png";
import HDemo from "../../pic/HDemo.mov";
import WhatColorImg from "../../pic/WhatColor.png";
import ColorSensor from "../../pic/colorSensor.png";
import screen from "../../pic/screen.png";
import battery from "../../pic/battery.png";
import AddIcon from "@mui/icons-material/Add";
import MagneticBoard from "../../pic/magneticBoard.jpg";
import Plan1 from "../../pic/plan1.png";
import Plan2 from "../../pic/plan2.png";
import Iterated from "../../pic/iterated.png";
import threeD from "../../pic/3D.png";
import ColorWorkFlow from "../../pic/ColorWorkFlow.png";
import UpdatedWorkFlow from "../../pic/UpdatedWorkFlow.png";
import { useTranslation } from "react-i18next";

// const Icons = [
//   {
//     images: null,
//     name: "Figma Logo",
//   },
// ];

const headerContent = [
  {
    title: "What Color: 基于Arduino的颜色识别玩具",
    detail:
      "此产品鼓励4岁+的孩子通过寻找物品来学习颜色。在识别一个物品的颜色后，What Color的触摸屏上会显示此颜色的红黄蓝构成，然后孩子可以用这个颜色进行绘画。显示红黄蓝的构成不仅可以教孩子什么是红色、黄色、蓝色，而且对于已经熟知红黄蓝的孩子，可以教他们颜色混合和更进阶的颜色概念，如珊瑚色、青色。",
    projectType: "Class Project",
    myRole: "Project owner",
    currentStatus: "User testing done",
    Btn: false,
    BtnContent: null,
    IconImage: null,
  },
];

const HCpath = "WhatColor.HeaderContent.";
const Ipath = "WhatColor.Intro.";
const InitDpath = "WhatColor.InitDesign.";
const IDpath = "WhatColor.IteratedDesign.";
const FPpath = "WhatColor.FinalProduct.";
const FWpath = "WhatColor.FutureWork.";

export default function WhatColor() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {headerContent.map((value, index) => (
        <ContentHeader
          index={value.index}
          key={t(HCpath + "title")}
          title={t(HCpath + "title")}
          detail={t(HCpath + "detail")}
          myRole={t(HCpath + "myRole")}
          projectType={t(HCpath + "projectType")}
          currentStatus={t(HCpath + "currentStatus")}
          Btn={t(HCpath + "Btn")}
          BtnContent={t(HCpath + "BtnContent")}
          IconImage={value.IconImage}
        />
      ))}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>{t(Ipath + "title")}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <img
            src={WhatColorImg}
            alt="the What Color toy"
            style={{ width: "30%" }}
          />

          <div style={{ width: "60%" }}>
            <div style={{ paddingBottom: "20px" }}>
              {t(Ipath + "message")}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html"
              >
                [1]
              </a>
            </div>
            <ul>
              <li style={{ paddingBottom: "10px" }}>{t(Ipath + "detail1")}</li>
              <li style={{ paddingBottom: "10px" }}>{t(Ipath + "detail2")}</li>
              <li style={{ paddingBottom: "10px" }}>{t(Ipath + "detail3")}</li>
              <li style={{ paddingBottom: "10px" }}>{t(Ipath + "detail4")}</li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={ColorSensor}
                alt="a arduino color sensor"
                style={{ width: "20%" }}
              />
              <AddIcon />
              <img
                src={screen}
                alt="a arduino LCD screen"
                style={{ width: "20%" }}
              />
              <AddIcon />
              <img
                src={battery}
                alt="a arduino LCD screen"
                style={{ width: "20%" }}
              />
              <AddIcon />
              <div style={{ paddingLeft: "15px" }}>{t(Ipath + "compo")}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionHeader}>{t(InitDpath + "title")}</div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "30px",
          }}
        >
          <div>
            <strong>{t(InitDpath + "need.title")}</strong>
            {t(InitDpath + "need.message")}
          </div>
          <div>
            <strong>{t(InitDpath + "task.title")}</strong>
            {t(InitDpath + "task.message1")}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=PIvXDLdb_L4"
            >
              {t(InitDpath + "task.message2")}
            </a>
            {t(InitDpath + "task.message3")}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <img
              style={{ width: "20%", paddingRight: "30px" }}
              src={MagneticBoard}
              alt="mangetic board"
            />
            <div>
              <div>{t(InitDpath + "discovery.title")}</div>
              <ul>
                <li style={{ paddingBottom: "10px" }}>
                  {t(InitDpath + "discovery.message1")}
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  {t(InitDpath + "discovery.message2")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ fontWeight: "900", fontSize: "25px", color: "#2F76B5" }}>
          设计图
        </div>
        <div>
          考虑了硬件可实施性。设计为一个位置固定的玩具，孩子会把物体带到玩具上进行扫描。
        </div>
        <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
          方案一：
        </div>
        <img
          style={{ width: "65%", paddingBottom: "20px" }}
          src={Plan1}
          alt="plan1"
        />
        <div>颜色传感器 + 喇叭</div>
        <div>
          喇叭会说出物品颜色的色彩组成。由于孩子还没有学过百分比，喇叭会说：“大部分都是蓝色，有一些黄色和一点点红色”
        </div>
        <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
          方案二：
        </div>
        <img
          style={{ width: "65%", paddingBottom: "20px" }}
          src={Plan2}
          alt="plan2"
        />
        <div>颜色传感器 + 喇叭 + 显示屏</div>
        <div style={{ paddingBottom: "30px" }}>
          小孩把感兴趣的物品放置在玩具上，喇叭会说出物品颜色的色彩组成，同时显示屏上会显示出红黄蓝的占比
        </div>
        <div className={styles.sectionHeader}>迭代后的设计</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Iterated} alt="iterated design" style={{ width: "30%" }} />
          <ul>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "summary.detail1")}
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "summary.detail2")}
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "summary.detail3")}
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "summary.detail4")}
            </li>
          </ul>
        </div>
        <div
          style={{
            fontWeight: "900",
            fontSize: "25px",
            color: "#2F76B5",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {t(IDpath + "FlowChart")}
        </div>
        <img
          src={ColorWorkFlow}
          alt="Work Flow"
          style={{ width: "100vw", paddingBottom: "15px" }}
        />
        <div style={{ paddingTop: "20px" }}>
          {t(IDpath + "thoughts.detail1")}
        </div>
        <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
          {t(IDpath + "thoughts.detail2")}
        </div>
        <div className={styles.sectionHeader}>
          {t(IDpath + "modeling.title")}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={threeD} alt="iterated design" style={{ width: "30%" }} />
          <ul>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "modeling.message1")}
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "modeling.message2")}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doi.org/10.1016/j.ergon.2004.11.003"
              >
                [3]
              </a>
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(IDpath + "modeling.message3")}
            </li>
          </ul>
        </div>
        <div className={styles.sectionHeader}>{t(FPpath + "title")}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "30px",
            paddingTop: "10px",
          }}
        >
          <img src={WhatColorImg} alt="What Color" style={{ width: "30%" }} />
          <ul>
            <li style={{ paddingBottom: "10px" }}>
              {t(FPpath + "summary.detail1")}
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(FPpath + "summary.detail2")}
            </li>
            <li style={{ paddingBottom: "10px" }}>
              {t(FPpath + "summary.detail3.title")}
            </li>
            <ul>
              <li style={{ paddingBottom: "10px" }}>
                {t(FPpath + "summary.detail3.detail1")}
              </li>
              <li style={{ paddingBottom: "10px" }}>
                {t(FPpath + "summary.detail3.detail2")}
              </li>
            </ul>
          </ul>
        </div>

        <div
          style={{
            fontWeight: "900",
            fontSize: "25px",
            color: "#2F76B5",
            paddingTop: "10px",
          }}
        >
          {t(FPpath + "FlowChart")}
        </div>
        <img
          src={UpdatedWorkFlow}
          alt="Work Flow"
          style={{ width: "100vw", paddingBottom: "15px", paddingTop: "10px" }}
        />

        <div className={styles.sectionHeader}>{t(FWpath + "title")}</div>
        <div>{t(FWpath + "summary.detail1")}</div>
        <div>{t(FWpath + "summary.detail2")}</div>
        <div style={{ paddingBottom: "30px" }}>
          {t(FWpath + "summary.detail3")}
        </div>
        <div style={{ fontSize: "20px", width: "60%" }}>
          {t(FWpath + "summary.detail4")}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doi.org/10.1145/3491102.3502024"
          >
            [2]
          </a>
        </div>
        <div className={styles.sectionHeader}>{t("References")}</div>
        <div style={{ width: "60%", textIndent: "-36px", paddingLeft: "36px" }}>
          <div>
            Centers for Disease Control and Prevention. (2022, March 31).
            Important milestones: Your baby by Four Years. Centers for Disease
            Control and Prevention.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html"
            >
              https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html
            </a>
          </div>
          <div>
            Connor Geddes, David R. Flatla, Garreth W. Tigwell, and Roshan L
            Peiris. 2022. Improving Colour Patterns to Assist People with Colour
            Vision Deficiency. In Proceedings of the 2022 CHI Conference on
            Human Factors in Computing Systems (CHI '22). Association for
            Computing Machinery, New York, NY, USA, Article 479, 1–17.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doi.org/10.1145/3491102.3502024"
            >
              https://doi.org/10.1145/3491102.3502024
            </a>
          </div>
          <div>
            Kong, & Lowe, B. D. (2005). Optimal cylindrical handle diameter for
            grip force tasks. International Journal of Industrial Ergonomics,
            35(6), 495–507.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doi.org/10.1016/j.ergon.2004.11.003"
            >
              https://doi.org/10.1016/j.ergon.2004.11.003
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
