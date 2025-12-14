import styles from "./ColorUnclasher.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import JavaScriptIcon from "../../pic/js.png";
import LinkedInIcon from "../../pic/LinkedIn.png";

const Icons = [
  {
    images: JavaScriptIcon,
    name: "JavaScript",
  },
];

const headerContent = {
  title: "💡 TextWarp: Creative Text Effects for Adobe Express",
  detail:
    "An interactive Adobe Express add-on that enables real-time text warping, mesh distortion, and creative typography effects using SVG path manipulation.",
  projectType:
    "Adobe Express Add-On Hackathon → Selected by Adobe Fund for Design",
  myRole: "Frontend Engineer · Graphics Engineering",
  currentStatus:
    "Submitted for Review: earned Adobe Fund for Design backing.",
  Btn: false,
  Icon: true,
  IconImage: Icons,
  timeframe: "July 2025",
  tags: ["JavaScript", "opentype.js", "warp.js"],
};

const teamMembers = [
  {
    role: "UI/UX Designer",
    members: [
      {
        name: "Yuanqi Zhang",
        linkedin: "https://www.linkedin.com/in/yuanqi-zhang-avery/",
      },
      {
        name: "Liam Deng",
        linkedin: "https://www.linkedin.com/in/liamdeng/",
      },
    ],
  },
  {
    role: "Software",
    members: [
      {
        name: "Katie Yang",
        linkedin: "https://www.linkedin.com/in/katie-yang-ky",
      },
      {
        name: "Lena Li",
        linkedin: "https://www.linkedin.com/in/lena-zilingli/",
      },
      {
        name: "Corrine Wu",
        linkedin: "https://www.linkedin.com/in/cuichanwu/",
      },
    ],
  },
];

export default function TextWarp() {
  return (
    <div className={styles.container}>
      <ContentHeader content={headerContent}/>

      {/* Team */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Who Built This</div>
        <div className={styles.teamSection}>
          {teamMembers.map((group) => (
            <div key={group.role}>
              <div className={styles.teamRole}>{group.role}</div>
              <div className={styles.teamList}>
                {group.members.map((member) => (
                  <div className={styles.teamMember} key={member.name}>
                    <span className={styles.teamName}>{member.name}</span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={`LinkedIn profile for ${member.name}`}
                    >
                      <img
                        src={LinkedInIcon}
                        alt="LinkedIn icon"
                        className={styles.socialIcon}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspiration */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Inspiration</div>
        <p className={styles.paragraph}>
          We wanted to make text feel as alive and expressive as imagery in
          digital design. While designers have endless options for editing
          photos, there are very few tools that let you warp, bend, and sculpt
          letterforms in real time.
        </p>
        <p className={styles.paragraph}>
          TextWarp bridges that gap. Our goal was to empower designers, artists,
          and typography nerds with a playground where they can experiment with
          expressive text effects without complex tooling or offline workflows.
        </p>
      </div>

      {/* What it does */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>What It Does</div>
        <p className={styles.paragraph}>
          TextWarp is an interactive tool that lets users twist, bend, and
          stylize text through a catalog of presets plus hands-on mesh and
          smudge controls. Every change renders instantly so you can iterate
          quickly and save your favorite typographic explorations.
        </p>
        <p className={styles.paragraph}>
          It ships as an Adobe Express add-on, so warped text can be pushed
          straight onto the canvas—perfect for quick pitch decks, social posts,
          or illustrative typography moments.
        </p>
      </div>

      {/* How we built it */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>How We Built It</div>
        <p className={styles.paragraph}>
          We kept the stack lightweight but powerful so that every interaction
          feels responsive:
        </p>
        <ul className={styles.list}>
          <li>React for component-driven UI and state orchestration.</li>
          <li>opentype.js to parse fonts and extract glyph outlines.</li>
          <li>warp.js to power mesh, smudge, and custom warp algorithms.</li>
        </ul>
        <p className={styles.paragraph}>
          SVG paths are manipulated in the browser so designers see true, vector
          perfect previews before sending assets to the Adobe Express canvas.
        </p>
      </div>

      {/* Challenges */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Challenges We Ran Into</div>
        <ul className={styles.list}>
          <li>
            Baseline alignment across multiple fonts and multiline blocks while
            warping shapes.
          </li>
          <li>
            Complex math to keep distortion smooth and visually pleasing across
            every preset.
          </li>
          <li>
            Adapting third-party libraries like warp.js into the Adobe Express
            add-on sandbox.
          </li>
        </ul>
      </div>

      {/* What we learned */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>What We Learned</div>
        <p className={styles.paragraph}>
          Coordinating across design, graphics engineering, and QA forced us to
          build a modular architecture that supports rapid iteration. Early user
          sessions shaped the controls, presets, and even defaults for warp
          intensity.
        </p>
        <p className={styles.paragraph}>
          We also learned how to evaluate open-source math libraries quickly,
          customize them for Express, and ship them as a secure add-on—despite
          the project not winning the hackathon, Adobe Fund for Design believed
          in the concept and backed further development.
        </p>
      </div>
    </div>
  );
}
