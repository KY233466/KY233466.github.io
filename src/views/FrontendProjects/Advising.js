import styles from "./ColorUnclasher.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ReactIcon from "../../pic/React.png";
import JavaScriptIcon from "../../pic/js.png";
import AzureIcon from "../../pic/microsoft-azure-logo.png"; // add later if you have one

const Icons = [
  {
    images: ReactIcon,
    name: "React",
  },
  {
    images: JavaScriptIcon,
    name: "JavaScript",
  },
  {
    images: AzureIcon,
    name: "Azure",
  },
];

const headerContent = {
  title: "🏆 Track Winner: AI-Enhanced Academic Advising",
  detail:
    "Track‑winning Outlook add‑in and advising chatbot that uses GenAI and RAG to help advisors answer repetitive policy questions faster and give students clearer, more consistent guidance.",
  projectType: "Hackathon -> Venture Competition -> Class Final Project",
  myRole: "Team Lead & Full‑Stack Developer",
  Icon: true,
  IconImage: Icons,
  Link: "https://devpost.com/software/tuftsadvisor",
  timeframe: "March 2025 - June 2025 · JumboHack",
  tags: ["GenAI", "RAG", "React", "Azure", "Python", "JavaScript", "Flask", "MongoDB Atlas", "OAuth 2.0"],
};

export default function Advising() {
  return (
    <div className={styles.container}>
      <ContentHeader content={headerContent}/>

      {/* Inspiration */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>Inspiration</h2>
        <p className={styles.paragraph}>
          From lengthy, confusing degree audits to long lists of major
          requirements, staying on track to graduate can be stressful.
          Students aren&apos;t always sure whether they&apos;re satisfying
          program rules, which leads to an influx of repetitive emails for
          academic advisors and a lot of uncertainty for students.
        </p>
        <p className={styles.paragraph}>
          We wanted to build something that would make academic advising at
          Tufts feel clearer and more modern—helping students and advisors
          navigate their academic journey with less confusion and fewer
          back‑and‑forth emails.
        </p>
      </div>

      {/* What it does */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>What TuftsAdvisor Does</h2>
        <p className={styles.paragraph}>
          TuftsAdvisor is a two‑part solution designed to modernize academic
          advising:
        </p>
        <ul className={styles.list}>
          <li>
            <strong>Advising chatbot interface:</strong> A web chat experience
            that students and advisors can use to ask questions about academic
            policies, degree progress, and requirements, and receive quick,
            grounded answers powered by a RAG pipeline.
          </li>
          <li>
            <strong>Outlook plugin for advisors:</strong> An Office add‑in that
            reads incoming advising emails and uses our API plus retrieval‑
            augmented generation to create high‑quality draft responses,
            saving advisors time while keeping tone and content consistent.
          </li>
        </ul>
        <p className={styles.paragraph}>
          Together, they reduce repetitive work for advisors and give students
          faster, more reliable guidance about their path to graduation.
        </p>
      </div>

      {/* How we built it */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>How We Built It</h2>
        <p className={styles.paragraph}>
          On the backend, we built a Flask API that orchestrates a retrieval‑
          augmented generation (RAG) workflow with GPT‑4o‑mini. Academic rules,
          degree audits, and policy documents are embedded and stored in
          priority‑based vector stores so the system can surface the most
          relevant passages for each question.
        </p>
        <p className={styles.paragraph}>
          We used Microsoft Graph API to detect new emails in advisor inboxes
          and pass them through our RAG pipeline to generate structured,
          outlined draft responses. The same API and backend power a React
          web‑based chat interface for students, built with Vite and a
          responsive front end.
        </p>
        <p className={styles.paragraph}>
          The infrastructure runs on Azure, with data persisted in MongoDB
          Atlas. We implemented secure login and session handling using
          OAuth&nbsp;2.0 (MSAL.js) so each advisor can configure their own tone,
          signature, and reply preferences.
        </p>
      </div>

      {/* Challenges */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>Challenges We Ran Into</h2>
        <ul className={styles.list}>
          <li>
            <strong>New concepts and tools:</strong> Many of the techniques we
            used—especially production‑style RAG, Graph API integration, and
            Microsoft Office add‑ins—aren&apos;t covered in typical CS
            coursework, so we had to learn them quickly.
          </li>
          <li>
            <strong>Navigating a large, mature codebase:</strong> Working
            within the Microsoft 365 add‑in ecosystem required carefully
            reading documentation and validating what was technically feasible
            inside Outlook&apos;s constraints.
          </li>
          <li>
            <strong>Balancing accuracy and usability:</strong> We needed
            responses that were both legally/academically correct and easy for
            students to understand, which meant iterating on prompt design and
            retrieval strategies.
          </li>
        </ul>
      </div>

      {/* Impact & accomplishments */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>Impact &amp; Accomplishments</h2>
        <ul className={styles.list}>
          <li>
            Led a team of six to deliver a working Outlook plugin and web
            chatbot within the hackathon timeline.
          </li>
          <li>
            Cut advisor response times by an estimated <strong>40%</strong> by
            generating high‑quality email drafts directly inside Outlook.
          </li>
          <li>
            Integrated GPT‑4o‑mini with a dual‑layer RAG store to improve
            retrieval accuracy by roughly <strong>35%</strong> compared to a
            naive single‑store baseline.
          </li>
          <li>
            Won the <strong>Track Winner</strong> prize for AI‑Enhanced Academic
            Advising at JumboHack 2025.
          </li>
        </ul>
      </div>

      {/* What we learned */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>What We Learned</h2>
        <p className={styles.paragraph}>
          We learned how to build and ship a Microsoft Office add‑in end to
          end—from manifest configuration and sideloading to integrating with
          live mailboxes through Microsoft Graph. On the AI side, we deepened
          our understanding of how to design and evaluate RAG systems,
          including document chunking, priority stores, and prompt templates
          that reduce hallucinations.
        </p>
        <p className={styles.paragraph}>
          We also gained experience in managing cloud infrastructure on Azure,
          wiring together React, Flask, and MongoDB Atlas with secure auth,
          and collaborating as a cross‑functional team under tight time
          constraints.
        </p>
      </div>

      {/* Tech stack */}
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionHeader}>Tech Stack</h2>
        <ul className={styles.list}>
          <li>
            <strong>Frontend:</strong> React, Vite, CSS
          </li>
          <li>
            <strong>Backend:</strong> Python, Flask, REST API, MongoDB Atlas
          </li>
          <li>
            <strong>AI:</strong> GPT‑4o‑mini, retrieval‑augmented generation
            (RAG) with dual‑layer priority stores
          </li>
          <li>
            <strong>Integrations:</strong> Microsoft Graph API, Outlook
            add‑ins, MSAL.js (OAuth&nbsp;2.0)
          </li>
          <li>
            <strong>Infrastructure &amp; tools:</strong> Azure, Git
          </li>
        </ul>
      </div>
    </div>
  );
}
