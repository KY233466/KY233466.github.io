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

export default function WhatColor() {
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
        <div className={styles.sectionHeader}>介绍</div>
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
              根据美国疾病预防控制中心，4岁的儿童的认知应该达到能够说出几种物品的颜色的程度
            </div>
            <ul>
              <li style={{ paddingBottom: "10px" }}>
                What
                Color受众：正在学习基础颜色（红，黄，蓝），或已经学过基础颜色，想要学习进阶颜色或色彩混合的四岁+小孩
              </li>
              <li style={{ paddingBottom: "10px" }}>
                鼓励小孩在探索的时候去识别物体颜色，并用这个颜色进行绘画
              </li>
              <li style={{ paddingBottom: "10px" }}>
                提升孩子对颜色组成的敏感度，接触色彩混合理论
              </li>
              <li style={{ paddingBottom: "10px" }}>
                组成部分：颜色传感器 + 触摸屏 + Arduino + 3D打印外壳
              </li>
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
              <div style={{ paddingLeft: "15px" }}>3D打印外壳</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionHeader}>初步设计过程</div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "30px",
          }}
        >
          <div>
            <strong>需求分析</strong>: 4岁的儿童的应该能够说出几种物品的颜色
          </div>
          <div>
            <strong>任务分析</strong>:
            找到类似玩具：磁力绘画板。在网上找到小孩玩、并且评估的
            <a href="https://www.youtube.com/watch?v=PIvXDLdb_L4">视频</a>
            。对视频内容以及反馈进行分析。
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
              <div>主要收获: </div>
              <ul>
                <li style={{ paddingBottom: "10px" }}>
                  三岁小孩可以举起710g的物品
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  1岁小孩可以用手握住并使用直径为1.2cm的笔
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
              考虑了人体工程学设计，结合了市场上常有的功能，使其便于携带
            </li>
            <li style={{ paddingBottom: "10px" }}>
              增加了触摸屏和笔，用孩子绘画的天性增加娱乐感
            </li>
          </ul>
        </div>
        <div style={{ paddingTop: "20px" }}>
          后来想到，把颜色传感器放在玩具的背面更符合现代人的扫描物品的习惯。
        </div>
        <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
          这一改变在3D建模里体现出来。
        </div>
        <div className={styles.sectionHeader}>3D建模</div>
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
              考虑到大部分儿童都用右手书写，把手被放在了左侧，这样他们可以持设备和笔跑来跑去
            </li>
            <li style={{ paddingBottom: "10px" }}>
              确保产品的形状不像锤子，以避免被砸碎
            </li>
            <li style={{ paddingBottom: "10px" }}>
              放置在玩具底部的9V电池让该设备的平衡点靠近底部，让孩子们更容易把持住，避免砸伤
            </li>
            <li style={{ paddingBottom: "10px" }}>
              根据Kong的说法，用于握力任务的最佳手柄直径是用户手长的19.7%。手长为
              10 厘米的 4 岁儿童的最佳直径为 1.97 厘米，所以左把手的直径不超过2厘米
            </li>
            <li style={{ paddingBottom: "10px" }}>
              确保任何一点的外壳厚度至少为 1.2 厘米
            </li>
          </ul>
        </div>
        <div className={styles.sectionHeader}>最终产品 + 用户测试</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "30px",
          }}
        >
          <img src={WhatColorImg} alt="What Color" style={{ width: "30%" }} />
          <ul>
            <li style={{ paddingBottom: "10px" }}>
              写玩具上方写上What Color以指示该设备应保持哪个方向
            </li>
            <li style={{ paddingBottom: "10px" }}>
              该设备重约300g，不会对4岁孩子造成肌肉骨骼损伤
            </li>
            <li style={{ paddingBottom: "10px" }}>
              与一位四岁女童和一位八岁女童进行用户测试。为了用户隐私，现不展示视频
            </li>
            <ul>
              <li style={{ paddingBottom: "10px" }}>
                但所有被测似乎更喜欢通过戳笔的顶部来拿出它，而不是通过在右边预留的空隙
              </li>
              <li style={{ paddingBottom: "10px" }}>
                把手在玩具左侧，但是我发现被测都喜欢用右手抓住把手。这样会旋转玩具的方向
              </li>
            </ul>
          </ul>
        </div>
        <div className={styles.sectionHeader}>进一步的工作</div>
        <div>
          此原型设计受到硬件可实施性影响，因而有很多进步空间。基于此次的用户测试可以进行下一步的迭代设计。
        </div>
        <div>迭代设计仅考虑在有工业标准化的硬件时，该如何设计。</div>
        <div style={{ paddingBottom: "30px" }}>
          可考虑的路如：双手持平板式，单手扫描设备，孩子用智能手表拓展设备/软件...
        </div>
        <div className={styles.sectionHeader}>引用</div>
        <div style={{ width: "60%", textIndent: "-36px", paddingLeft: "36px" }}>
          <div>
            Centers for Disease Control and Prevention. (2022, March 31).
            Important milestones: Your baby by Four Years. Centers for Disease
            Control and Prevention.{" "}
            <a href="https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html">
              https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html
            </a>
          </div>
          <div>
            Kong, & Lowe, B. D. (2005). Optimal cylindrical handle diameter for
            grip force tasks. International Journal of Industrial Ergonomics,
            35(6), 495–507.{" "}
            <a href="https://doi.org/10.1016/j.ergon.2004.11.003">
              https://doi.org/10.1016/j.ergon.2004.11.003
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
