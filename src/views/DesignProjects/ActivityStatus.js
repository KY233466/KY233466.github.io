import styles from "./ActivityStatus.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";

const headerContent = [
  {
    title: "Activity Status Study",
    detail:
      "In many social media apps with messaging capabilities, a feature to display users’ availability and recent activity has become standard. WhatsApp, for example, is well-known for its “last seen today at 9:03 AM” feature. In this paper, we focus on how this feature manifests in two other messaging services operated by Meta Platforms: Messenger and Instagram Direct, where it is known as the “activity status.” Specifically, we examine how users view this feature and the privacy factors related to it. While previous research has examined how users view the privacy factors of message read receipts and the aforementioned feature in WhatsApp, no studies have focused on Messenger and Instagram Direct. In our research, the majority of users viewed the activity status as a relatively insignificant feature to their overall messaging experience. Interestingly, however, users strongly disagreed on how private this information truly is. We close the paper by suggesting reasons for this privacy divide and directions for future work.",
    projectType: "Class research project",
    myRole: "Team member in a group of 2",
    currentStatus: "Completed",
    Btn: false,
    BtnContent: null,
  },
];

export default function ActivityStatus() {
  return (
    <div className={styles.container}>
      {headerContent.map((value) => (
        <ContentHeader key={value.title} content={value} />
      ))}
      <div className={styles.contentContainer}>{/* Reserved */}</div>
    </div>
  );
}
