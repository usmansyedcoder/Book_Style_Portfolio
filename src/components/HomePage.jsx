import styles from "./Pages.module.css";
import { owner } from "../data/portfolio.js";

export default function HomePage() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.bookmark} />
      <p className={styles.pageChapter}>Portfolio — 2024</p>

      <div className={styles.portrait}>{owner.initials}</div>
      <h1 className={styles.pageTitle}>{owner.name}</h1>
      <p className={styles.pageTitleItalic}>{owner.title}</p>
      <div className={styles.divider} />

      <p className={styles.bodyText}>{owner.bio}</p>

      <div className={styles.tagRow}>
        <font>Tags:</font>
        {owner.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
