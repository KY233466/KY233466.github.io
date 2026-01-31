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
    title: "Save LinkedIn → Notion: Zero-Backend CRM Helper",
    detail:
        "A Chrome extension that scrapes LinkedIn profiles and saves them directly into my Notion CRM with one click. No backend server or third-party data storage!",
    projectType: "Solo Project • Chrome Extension • Personal Tool",
    // myRole: "Designer & Full-Stack Extension Developer",
    currentStatus: "Published in Chrome Web Store",
    Btn: false,
    Icon: true,
    IconImage: Icons,
    currentStatusLink: 'https://chromewebstore.google.com/detail/save-linkedin-%E2%86%92-notion/hbbaojnhbljohjcnldhekfioonfkjchf?authuser=0&hl=en',
    timeframe: "Nov 2025 · Personal Tool",
    tags: ["React", "Chrome Extension", "Notion API"],
};

export default function LinkedInNotion() {
    return (
        <div className={styles.container}>
            <ContentHeader content={headerContent}/>

            {/* Privacy Policy */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>Privacy Policy</div>
                <p className={styles.paragraph}>
                    Save LinkedIn → Notion is built strictly for personal use and is designed with
                    privacy first. The extension does not use any backend server, does not
                    log analytics, and does not send or sell any data to third parties.
                </p>
                <p className={styles.paragraph}>
                    Your Notion Internal Integration Token and Database ID are stored only
                    in <code>chrome.storage.local</code> on your device. These values are
                    used exclusively to authenticate direct requests from your browser to
                    Notion&apos;s official API. No external service ever sees your keys.
                </p>
                <p className={styles.paragraph}>
                    The extension reads website content only on LinkedIn profile pages and
                    only when you explicitly open the popup and click save. The scraped
                    data (name, headline, company, school, profile URL) is sent directly
                    to your own Notion database. There is no third-party storage, no
                    remote logging, and no tracking.
                </p>
                <p className={styles.paragraph}>
                    At any time, you can clear your stored credentials from the settings
                    side panel. This immediately removes the keys from local storage and
                    disables all Notion API calls until you reconfigure the extension.
                </p>
            </div>

            {/* Inspiration */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>Inspiration</div>
                <p className={styles.paragraph}>
                    Networking is already painful enough without a little automation. It
                    is hard to keep track of people I have met, want to talk to, or have
                    talked to without some sort of database. Being a Notion user, I immediately
                    thought about starting a database. However, that means manually copying,
                    switching tabs, and pasting over and over again.
                </p>
                <p className={styles.paragraph}>
                    I wanted a tool that felt lightweight and trustworthy: no backend, no
                    external accounts, and no risk of my Notion keys leaving my machine.
                    That turned into Save LinkedIn → Notion, a small but powerful extension
                    that acts as my personal CRM helper.
                </p>
            </div>

            {/* What It Does */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>What It Does</div>
                <p className={styles.paragraph}>
                    The extension detects when I&apos;m on a LinkedIn profile URL
                    (linkedin.com/in/...) and scrapes the visible profile fields into a
                    friendly popup form. I can review and edit the values, add notes, and
                    then save the contact directly into a Notion database as a new row.
                </p>
                <ul className={styles.list}>
                    <li>Scrapes name, headline, current company, school, and profile URL.</li>
                    <li>
                        Lets me edit all fields and add custom notes before creating the
                        Notion entry.
                    </li>
                    <li>
                        Checks for existing contacts with the same LinkedIn URL to avoid
                        duplicates.
                    </li>
                    <li>
                        Uses my Notion API key directly from the browser, with no
                        intermediary server.
                    </li>
                </ul>
            </div>

            {/* How It Works */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>How It Works</div>
                <p className={styles.paragraph}>
                    LinkedIn renders much of its profile UI inside a same-origin iframe
                    at <code>/preload/</code>, so naïve scraping from the top-level
                    document fails. I implemented logic to locate the correct iframe,
                    select the inner document, and then extract the profile name and
                    metadata from that nested DOM.
                </p>
                <p className={styles.paragraph}>
                    The extension uses a background service worker to talk to the Notion
                    API. The popup sends messages with the scraped profile data, and the
                    background script either queries the database for an existing page or
                    creates a new one with the appropriate properties.
                </p>
                <p className={styles.paragraph}>
                    All configuration (Notion API key and database ID) is handled through
                    a Chrome side panel UI. The panel shows masked fields with an eye
                    toggle to reveal the values, plus a &quot;Clear credentials&quot;
                    action to remove them from storage.
                </p>
            </div>

            {/* Challenges */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>Challenges</div>
                <ul className={styles.list}>
                    <li>
                        Handling LinkedIn&apos;s dynamic DOM, nested iframes, and
                        auto-generated class names while keeping selectors robust.
                    </li>
                    <li>
                        Designing the extension to work entirely without a backend while
                        still integrating cleanly with Notion&apos;s API.
                    </li>
                    <li>
                        Coordinating background scripts, content scripts, the popup, and
                        the side panel with message passing and async flows.
                    </li>
                    <li>
                        Building a React-based UI pipeline (Vite + TypeScript) that
                        outputs the right bundles for Chrome&apos;s Manifest V3.
                    </li>
                </ul>
            </div>

            {/* Impact & What I Learned */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>Impact & What I Learned</div>
                <ul className={styles.list}>
                    <li>
                        Turned a repetitive manual workflow into a one-click action,
                        making it much easier for me to maintain a clean networking CRM in
                        Notion.
                    </li>
                    <li>
                        Deepened my understanding of Chrome extension architecture,
                        including background service workers, content scripts, and side
                        panels.
                    </li>
                    <li>
                        Gained experience working directly with the Notion API and
                        designing data models that map cleanly from scraped UI into
                        structured properties.
                    </li>
                    <li>
                        Practiced building privacy-first tools where data never leaves the
                        user&apos;s device except for the API calls they explicitly
                        trigger.
                    </li>
                </ul>
            </div>

            {/* Tech Stack */}
            <div className={styles.contentContainer}>
                <div className={styles.sectionHeader}>Tech Stack</div>
                <ul className={styles.list}>
                    <li>
                        <strong>Extension:</strong> Chrome Manifest V3, background service
                        worker, content scripts, side panel
                    </li>
                    <li>
                        <strong>Frontend:</strong> React, TypeScript, Vite, CSS Modules
                    </li>
                    <li>
                        <strong>APIs:</strong> Notion REST API, Chrome extension APIs
                        (storage, tabs, scripting, sidePanel)
                    </li>
                    <li>
                        <strong>Tooling:</strong> npm, Git, local-only development and
                        testing (no backend)
                    </li>
                </ul>
            </div>
        </div>
    );
}