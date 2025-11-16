import React from "react";
import styles from "./ColorUnclasher.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ReactIcon from "../../pic/React.png";
import JavaScriptIcon from "../../pic/js.png";
// import ReduxIcon from "../../pic/ReduxIcon.png";

const Icons = [
  {
    images: ReactIcon,
    name: "React",
  },
  {
    images: JavaScriptIcon,
    name: "JavaScript",
  },
  // {
  //   images: ReduxIcon,
  //   name: "Redux",
  // },
];

const headerContent = {
  title: "Google Summer of Code '24: Color Unclasher",
  detail:
    "A CLI and JavaScript utility that helps MapLibre style authors make their maps more accessible for people with color blindness by analyzing color pairs with DeltaE.",
  projectType: "Open-source tooling",
  myRole: "Creator",
  currentStatus:
    "Published on npm",
  Btn: false,
  Icon: true,
  IconImage: Icons,
  Link: 'https://www.npmjs.com/package/@americana/color-unclasher',
};

export default function ColorUnclasher() {
  return (
    <div className={styles.container}>
      <ContentHeader
        key={headerContent.title}
        title={headerContent.title}
        detail={headerContent.detail}
        myRole={headerContent.myRole}
        projectType={headerContent.projectType}
        currentStatus={headerContent.currentStatus}
        currentStatusLink={headerContent.Link}
        Btn={headerContent.Btn}
        Icon={headerContent.Icon}
        IconImage={headerContent.IconImage}
      />

      {/* Overview */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>What Color-Unclasher Does</div>
        <p className={styles.paragraph}>
          Color-Unclasher is designed to help developers make their MapLibre
          styles more accessible to users with different types of color
          blindness. It analyzes color combinations within a style specification
          and reports any non-compliant layer pairs.
        </p>
        <p className={styles.paragraph}>
          For each pair of layers at the same zoom level, the tool simulates how
          their colors look under different types of color blindness and
          computes their DeltaE (CIE 2000) difference. If the DeltaE is below a
          minimum threshold, that pair is flagged as non-compliant.
        </p>
        <p className={styles.paragraph}>
          Results can be written out as a human-readable report (to the
          terminal or a file) and/or as structured JSON that you can feed back
          into future analyses.
        </p>
      </div>

      {/* Color perceptions table */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Color Perceptions Considered</div>
        <p className={styles.paragraph}>
          Color-Unclasher simulates multiple types of color vision to ensure
          that map styles work for as many people as possible.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Cause</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal Vision</td>
              <td>No color blindness</td>
              <td>Has red, green, and blue cones</td>
            </tr>
            <tr>
              <td>Protanopia</td>
              <td>Red–Green color blindness</td>
              <td>Missing red cone</td>
            </tr>
            <tr>
              <td>Deuteranopia</td>
              <td>Red–Green color blindness</td>
              <td>Missing green cone</td>
            </tr>
            <tr>
              <td>Tritanopia</td>
              <td>Blue–Yellow color blindness</td>
              <td>Missing blue cone</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DeltaE section */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Why DeltaE?</div>
        <p className={styles.paragraph}>
          DeltaE (CIE 2000) is a metric for how humans perceive color
          difference. A value of 0 means no difference, and 100 represents the
          maximum perceivable difference. Color-Unclasher uses{" "}
          <code>chroma.js</code>&apos;s <code>deltaE</code> implementation,
          based on Bruce Lindbloom&apos;s formula.
        </p>
        <p className={styles.paragraph}>
          Many accessibility checks rely on WCAG color contrast ratio, which is
          ideal for text on a background. But map tiles often cover similar
          areas of the screen. Two tiles such as{" "}
          <code>#475C5C</code> and <code>#515062</code> might fail traditional
          contrast ratio checks while still being visually distinguishable as
          map regions. DeltaE lets us express that nuance.
        </p>
      </div>

      {/* Supported expressions */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>
          Supported &amp; Unsupported Expressions
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4 className={styles.subHeader}>Supports</h4>
            <ul className={styles.list}>
              <li>
                <code>steps</code>
              </li>
              <li>
                <code>stops</code>
              </li>
              <li>
                <code>interpolate</code>
              </li>
              <li>
                <code>interpolate</code> with a single layer of{" "}
                <code>match</code>
              </li>
              <li>
                <code>case</code>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.subHeader}>Not Supported (Yet)</h4>
            <ul className={styles.list}>
              <li>Nested match expressions</li>
              <li>
                <code>in</code> expressions
              </li>
              <li>Other complex, deeply nested expressions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Recommendations</div>
        <ul className={styles.list}>
          <li>
            Use editor extensions that render inline color previews (e.g.,
            Color Highlight in VS Code) so you can see color changes as you
            edit your MapLibre style JSON.
          </li>
          <li>
            Experiment with different minimum DeltaE values and preview colors
            using{" "}
            <a
              className={styles.link}
              href="https://leonardocolor.io/tools.html"
              target="_blank"
              rel="noreferrer"
            >
              leonardocolor.io
            </a>
            . The pair <code>#475C5C</code> and <code>#515062</code> has DeltaE
            values of 5.56 (Deuteranopia), 7.95 (Protanopia), and 6.46
            (Tritanopia).
          </li>
          <li>
            Explore how groups of colors behave for different types of color
            blindness via{" "}
            <a
              className={styles.link}
              href="https://color.adobe.com/create/color-accessibility"
              target="_blank"
              rel="noreferrer"
            >
              Adobe Color&apos;s accessibility tools
            </a>
            .
          </li>
        </ul>
      </div>

      {/* Example workflow */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Example Workflow</div>
        <p className={styles.paragraph}>
          A typical workflow is to run an analysis, export non-compliant pairs,
          curate which ones you care about, and then re-run the analysis with an
          ignore list.
        </p>
        <pre className={styles.code}>
{`# 1. Export non-compliant pairs
color-unclasher styles.json result.txt --export-pairs-path output.json

# 2. Manually edit output.json to keep only the pairs you want to ignore,
#    for example, leaving only ["airport", "grass"] for a given zoom level.

# 3. Re-run the analysis with the ignore list
color-unclasher styles.json result.txt --pairs-to-ignore-path output.json`}
        </pre>
        <p className={styles.paragraph}>
          The second run will skip any pairs you&apos;ve configured to ignore,
          so the report focuses on the remaining issues.
        </p>
      </div>

      {/* API usage for suggestions */}
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>API: Get Adjusted Colors</div>
        <p className={styles.paragraph}>
          Behind the scenes, Color-Unclasher can suggest alternative colors that
          meet your minimum DeltaE threshold using <code>adjustRGB</code> and{" "}
          <code>adjustHSL</code>. These utilities incrementally adjust red,
          green, blue or hue, saturation, and lightness to discover compliant
          candidates.
        </p>
        <pre className={styles.code}>
{`import ColorUnclasher from "color-unclasher";

const color1 = "#a4a95b"; // fixed
const color2 = "#ff8375"; // to be adjusted
const mode = "deuteranopia"; // protanopia | deuteranopia | tritanopia
const minDeltaE = 7;

const suggestions = ColorUnclasher.adjustRGB(color1, color2, mode, minDeltaE);

// suggestions might include keys like:
//   red_increase, red_decrease,
//   green_increase, green_decrease,
//   blue_increase, blue_decrease`}
        </pre>
        <p className={styles.paragraph}>
          In the CLI, automatic suggestions start by trying colors with increased
          red (for RGB) or increased hue (for HSL), so there is a slight bias
          toward those directions. When using the API directly, you can inspect
          all suggested colors and pick the one that best fits your visual
          language.
        </p>
      </div>
    </div>
  );
}
