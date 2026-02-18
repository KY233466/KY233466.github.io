import styles from "./PrivacyPolicy.module.css";

export const metadata = {
  title: "Privacy Policy | LinkedIn to Notion",
  description: "Privacy policy for the LinkedIn to Notion Chrome extension.",
};

const effectiveDate = "February, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.page}>
      <article className={styles.policyCard}>
        <p className={styles.eyebrow}>Privacy Policy</p>
        <h1>Save LinkedIn → Notion - Chrome Extension</h1>
        <a style={{color: "grey"}}href="https://chromewebstore.google.com/detail/hbbaojnhbljohjcnldhekfioonfkjchf?utm_source=item-share-cb">hbbaojnhbljohjcnldhekfioonfkjchf</a>
        <p className={styles.meta}>Last Update: {effectiveDate}</p>

        <p>
          Save LinkedIn → Notion (the "Extension") is committed to securing your
          information and keeping it private. This policy explains how the
          extension works related to the collection, handling and sharing of
          personal data. Please review carefully before using our extension.
        </p>

        <h2>PERSONAL INFORMATION WE COLLECT AND HOW IT IS HANDLED</h2>
        <p>
          Other than browser-managed local storage, we do
          not set cookies or collect, send, or store your data outside your
          local extension. Your Notion API key and database ID are stored locally in your browser
          and are used only to send data directly to Notion&apos;s official API.
        </p>

        <h2>THIRD PARTIES</h2>
        <p>We do not share your data with third parties.</p>

        <h2>YOUR RIGHTS</h2>
        <p>
          We do not collect personal information on external servers. If you
          would like to contact us regarding this issue, please use the contact
          information below.
        </p>

        <h2>DATA RETENTION</h2>
        <p>
          We do not collect or store personal information outside the extension.
          When you delete the extension from your Chrome browser, any stored
          local extension settings are removed according to Chrome behavior.
        </p>

        <h2>CHANGES</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </p>

        <h2>LEGAL</h2>
        <p>
          This extension is not affiliated with or endorsed by LinkedIn or
          Notion. LinkedIn and Notion are trademarks of their respective owners.
        </p>

        <h2>CONTACT US</h2>
        <p>
          You may contact us at{" "}
          <a href="mailto:katieyang233466@gmail.com">katieyang233466@gmail.com</a> to
          communicate regarding this privacy policy.
        </p>
      </article>
    </section>
  );
}
