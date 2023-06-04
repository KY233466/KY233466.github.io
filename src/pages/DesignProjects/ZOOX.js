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
    title:
      "ZOOX自动驾驶汽车车载显示 ZOOX Autonomous Vehicle In Car Display Design",
    // detail:
    //   "Support and enhance the ride experience with interior display. Macbook Pro 14’ size interior display locating at the side of the seats. Focused on 'Safety', 'Error free', and 'Futuristic'.",
    detail:
      "显示屏为Macbook Pro 14 英寸尺寸大小，位于座椅侧面。制作了情绪板和24个高保真页面，使用动画和过度进行线框图设计和原型制作。由于屏面物理位置的特殊性，设计了锁屏界面以防止手臂误触而发生意外操作。考虑到安全性对自动驾驶汽车至关重要，为其设计了一套完整的安全说明和协议，包括紧急情况报告和与工作人员进行视频聊天。",
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

      <div className={styles.sectionHeader}>功能需求分析</div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <ul style={{ paddingTop: "20px" }}>
          <li style={{ paddingBottom: "10px" }}>
            乘客的安全至关重要，ZOOX作为一个初创公司为了口碑更要严加防范
          </li>
          <li style={{ paddingBottom: "10px" }}>
            ZOOX是一项新颖技术与产品的提供者
          </li>
          <li style={{ paddingBottom: "10px" }}>
            ZOOX目前定位为无人驾驶打车服务提供者
          </li>
          <li style={{ paddingBottom: "10px" }}>
            ZOOX车辆没有普通汽车的控制面板与方向盘
          </li>
          <li style={{ paddingBottom: "10px" }}>乘客的注意力不需要放在路上</li>
          <li style={{ paddingBottom: "10px" }}>
            座位为全包座位，屏幕在乘客身侧，可能会误触
          </li>
        </ul>

        <div style={{ padding: "20px 40px" }}>
          <div style={{ paddingBottom: "10px" }}>➡</div>
          <div style={{ paddingBottom: "10px" }}>➡</div>
          <div style={{ paddingBottom: "10px" }}>➡</div>
          <div style={{ paddingBottom: "10px" }}>➡</div>
          <div style={{ paddingBottom: "10px" }}>➡</div>
          <div style={{ paddingBottom: "10px" }}>➡</div>
        </div>

        <div style={{ paddingTop: "20px" }}>
          <div style={{ paddingBottom: "10px" }}>
            需要有保证乘客安全的措施、以及事件发生之后如何处理的措施
          </div>
          <div style={{ paddingBottom: "10px" }}>
            需要给乘车秀肌肉，展示车辆是如何运行的
          </div>
          <div style={{ paddingBottom: "10px" }}>
            需要有打车服务常有的功能，如更换目的地
          </div>
          <div style={{ paddingBottom: "10px" }}>
            需要车内环境设置，如调节空调温度
          </div>
          <div style={{ paddingBottom: "10px" }}>
            可以提供娱乐设施来增加体验，如车载音响音乐播放
          </div>
          <div style={{ paddingBottom: "10px" }}>需要防误触机制</div>
        </div>
      </div>

      <div className={styles.sectionHeader}>初始功能清单</div>
      <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <div>
          <ul style={{ paddingTop: "20px" }}>
            <li style={{ paddingBottom: "10px" }}>
              安全类
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  行程开始前的安全说明和协议
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
          </ul>
        </div>

        <div>
          <ul style={{ paddingTop: "20px" }}>
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
      </div>

      <div className={styles.sectionHeader}>功能细分</div>
      <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <div>
          <ul style={{ paddingTop: "20px" }}>
            <li style={{ paddingBottom: "10px" }}>
              安全类
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  行程开始前的安全说明和协议
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
          </ul>
        </div>

        <div>
          <ul style={{ paddingTop: "20px" }}>
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
      </div>

      {/* <div className={styles.contentContainer1}>
        <div className={styles.subSections2}>
          <div className={styles.sectionHeader}>初始功能清单</div>
          <ul style={{ paddingTop: "20px" }}>
            <li style={{ paddingBottom: "10px" }}>
              安全类
              <ul style={{ paddingTop: "20px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  行程开始前的安全说明和协议
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
        <div className={styles.sectionHeader}>情绪板</div>
        <div className={styles.MBgroup}>
          <div className={styles.MBgroupColumn}>
            <img src={ZOOXMB1} alt="ZOOX Light Mood Board" />
            {/* <h6>
              Moodboard 1. Light mode design that gives out a smart soft
              technology feeling as well as elegance with the bright and clean
              visual design. Mostly uses pastel colors to work as contrast to
              the background to aid information display.
            </h6> */}
            <h6>
              情绪板1. 明亮干净的视觉设计，给人一种智能、优雅、科技的感觉。多使用柔和的颜色与背景形成对比，以帮助显示信息。
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
            <h6>
              情绪板2. 暗模式设计，有一种严肃的未来主义技术氛围。高饱和度颜色用作与背景的对比，以强调显示的内容信息。
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
        <div className={styles.wireframes}>
          <img src={ZOOXW1} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW2} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW3} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW4} alt="ZOOX Home page wireframe" />
          <img src={ZOOXW5} alt="ZOOX Home page wireframe" />
        </div>
      </div>
    </div>
  );
}
