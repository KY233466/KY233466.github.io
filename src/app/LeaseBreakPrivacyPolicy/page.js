import styles from "../PrivacyPolicy/PrivacyPolicy.module.css";

export const metadata = {
  title: "Privacy Policy | LeaseBreak Listing Hider",
  description: "Privacy policy for the LeaseBreak Listing Hider Chrome extension.",
};

const effectiveDate = "November, 2026";

export default function LeaseBreakPrivacyPolicyPage() {
  return (
    <section className={styles.page}>
      <article className={styles.policyCard}>
        <p className={styles.eyebrow}>Privacy Policy</p>
        <h1>LeaseBreak Listing Hider - Chrome Extension</h1>
        <a style={{color: "grey"}} href="https://chromewebstore.google.com/detail/aojecddfdpaoceopebpmfiebidbjbime">aojecddfdpaoceopebpmfiebidbjbime</a>
        <p className={styles.meta}>Last Update: {effectiveDate}</p>

        <p>
          LeaseBreak Listing Hider (the "Extension") is committed to securing
          your information and keeping it private. This policy explains how the
          extension works related to the collection, handling and sharing of
          personal data. Please review carefully before using our extension.
        </p>

        <h2>PERSONAL INFORMATION WE COLLECT AND HOW IT IS HANDLED</h2>
        <p>
          Your hidden listings, saved listings, commute destination, arrival
          time and other settings are stored locally in your browser using
          browser-managed extension storage. There is no account, no tracking
          or analytics, and no server of ours. We do not set cookies or
          collect, send, or store your data on any server we operate. Commute
          results are cached locally in your browser so the same route is not
          looked up twice.
        </p>

        <h2>THIRD PARTIES</h2>
        <p>
          To calculate commute times, the extension sends the listing&apos;s
          location, your chosen destination and your arrival time to{" "}
          <a href="https://transitous.org">Transitous</a>, a free, open-source
          public transit routing service. No other information is sent to it.
        </p>
        <p>
          If you click the link icon next to a commute time, Google Maps opens
          in a new tab with the listing&apos;s address and your destination
          filled in. That page is subject to Google&apos;s own privacy policy.
        </p>
        <p>We do not sell or otherwise share your data with third parties.</p>

        <h2>YOUR RIGHTS</h2>
        <p>
          We do not collect personal information on external servers. If you
          would like to contact us regarding this issue, please use the contact
          information below.
        </p>

        <h2>DATA RETENTION</h2>
        <p>
          Your lists, settings and cached commute results stay in your browser
          until you clear them in the extension or remove the extension. When
          you delete the extension from your Chrome browser, any stored local
          extension data is removed according to Chrome behavior.
        </p>

        <h2>CHANGES</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </p>

        <h2>LEGAL</h2>
        <p>
          This extension is an independent project and is not affiliated with,
          endorsed by, or sponsored by LeaseBreak. Routing by Transitous, map
          data &copy; OpenStreetMap contributors.
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
