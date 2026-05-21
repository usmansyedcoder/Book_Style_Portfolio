import styles from './Pages.module.css'
import { projects } from '../data/portfolio.js'

export default function ProjectsPage() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.chapterLine}><span>Chapter II</span></div>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageTitleItalic}>Selected works</p>
      <div className={styles.divider} />

      {projects.map(p => (
        <div key={p.name} className={styles.projectCard}>
          <div className={styles.projectName}>{p.name}</div>
          <div className={styles.projectTech}>{p.tech}</div>
          <div className={styles.projectDesc}>{p.description}</div>
        </div>
      ))}

      <div className={styles.ornament}>✦ ✦ ✦</div>
    </div>
  )
}
