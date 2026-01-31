import styles from "./ColorUnclasher.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ReactIcon from "../../pic/React.png";
import JavaScriptIcon from "../../pic/js.png";
// add icons later (Python, GCP, etc.) if you want

const Icons = [
  {
    images: ReactIcon,
    name: "React",
  },
  {
    images: JavaScriptIcon,
    name: "JavaScript",
  },
];

const headerContent = {
  title: "🏆 AI Track Winner: AI Flashcard Maker",
  detail:
      "AI-powered Adobe Express add-on that automatically generates, formats, and lays out beautiful flashcards from any document—built to save educators hours of manual prep work.",
  projectType: "Hackathon Winner → Production Collaboration with Adobe",
  myRole: "Team Lead & Full-Stack Developer",
  currentStatus: "AI Track Winner at Adobe Express Hackathon (3,345 participants)",
  Btn: false,
  Icon: true,
  IconImage: Icons,
  currentStatusLink: "https://devpost.com/software/ai-flashcard-maker",
  timeframe: "July 2025 - Present",
  tags: ["GenAI", "React", "Python", "JavaScript", "Flask", "Google Cloud", "Babel"],
};

export default function Flashcard() {
  return (
      <div className={styles.container}>
        <ContentHeader content={headerContent}/>

        {/* Inspiration */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>Inspiration</div>
          <p className={styles.paragraph}>
            For teachers, turning teaching materials into flashcards often means
            spending hours coming up with questions, formatting layouts, and
            preparing files for print. Many educators lack the design expertise
            (or time) to create polished resources.
          </p>
          <p className={styles.paragraph}>
            That’s why we built the AI Flashcard Maker for Adobe Express—so any
            educator can instantly create beautiful, ready-to-print flashcards on
            a platform built to simplify graphic creation.
          </p>
        </div>

        {/* What it does */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>What It Does</div>
          <p className={styles.paragraph}>
            With automated text extraction, AI concept generation, and auto-layout,
            the add-on instantly transforms documents and notes into engaging,
            print-ready flashcards.
          </p>
          <ul className={styles.list}>
            <li>Extracts text from PDFs, PPTX, PNG, and JPG.</li>
            <li>Uses GPT-4o-mini to generate high-quality Q/A pairs.</li>
            <li>
              Automatically builds layouts and inserts flashcards directly into the
              Express canvas via the Adobe Add-On SDK.
            </li>
          </ul>
        </div>

        {/* How we built it */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>How We Built It</div>
          <p className={styles.paragraph}>
            Using <code>pdfjs</code> and <code>tesseract</code>, the add-on
            extracts text from common teaching file formats such as PDF, PPTX,
            PNG, and JPG. The backend—powered by GPT-4o-mini—detects key concepts
            in the extracted text and generates high-quality questions and
            answers.
          </p>
          <p className={styles.paragraph}>
            With the Adobe Express Add-On SDK, we calculate layout, spacing,
            typography, and grouping rules to insert flashcards directly onto the
            page. Hosting the backend on Google Cloud enables the add-on to be
            safely distributed via a private Adobe Express listing.
          </p>
        </div>

        {/* Challenges */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>Challenges We Ran Into</div>
          <ul className={styles.list}>
            <li>Packaging and bundling the add-on for production deployment.</li>
            <li>Navigating unclear or incomplete Adobe Add-On API documentation.</li>
            <li>Deploying the backend to Google Cloud and integrating securely.</li>
          </ul>
        </div>

        {/* Impact & accomplishments */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>Impact & Accomplishments</div>
          <ul className={styles.list}>
            <li>
              Reduced educators’ manual flashcard preparation time by{" "}
              <strong>80%</strong> through AI-driven Q/A generation and layout.
            </li>
            <li>
              Built and deployed a fully functional Adobe Express add-on despite
              ambiguous documentation and rapidly evolving SDK features.
            </li>
            <li>
              Designed and implemented backend infrastructure on Google Cloud,
              learned and deployed from scratch.
            </li>
            <li>
              Engineered a CI/CD pipeline using Babel and custom npm scripts to
              automate packaging and deployment.
            </li>
            <li>
              Led a team of 5 from ideation → prototype → production collaboration
              with the Adobe Express Add-On team.
            </li>
            <li>
              Worked closely with UX designers to build polished, accessible
              interfaces through iterative, user-centered development.
            </li>
          </ul>
        </div>

        {/* Special Thanks */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>Special Thanks</div>
          <p className={styles.paragraph}>
            Thank you to the Networking at Tufts Lab for providing the LLMProxy,
            made possible by their research paper{" "}
            <em>LLMProxy: Reducing Cost to Access Large Language Models</em>.
          </p>
        </div>

        {/* Tech stack */}
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeader}>Tech Stack</div>
          <ul className={styles.list}>
            <li>
              <strong>Frontend:</strong> React, JavaScript, CSS, Adobe Add-On SDK
            </li>
            <li>
              <strong>Backend:</strong> Python, Flask, Google Cloud
            </li>
            <li>
              <strong>AI:</strong> GPT-4o-mini, LLMProxy, text extraction
              (pdfjs + tesseract)
            </li>
            <li>
              <strong>Tools:</strong> Babel, Git, custom CI/CD scripts
            </li>
          </ul>
        </div>
      </div>
  );
}