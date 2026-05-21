import styles from './Pages.module.css'
import { education, skills } from '../data/portfolio.js'

export default function EducationPage() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.chapterLine}><span>Chapter III</span></div>
      <h1 className={styles.pageTitle}>Education</h1>
      <p className={styles.pageTitleItalic}>Academic journey</p>
      <div className={styles.divider} />

      {education.map(e => (
        <div key={e.degree} className={styles.eduEntry}>
          <div className={styles.eduDegree}>{e.degree}</div>
          <div className={styles.eduSchool}>{e.school}</div>
          <div className={styles.eduYear}>{e.year}</div>
        </div>
      ))}

      <p className={styles.sectionLabel}>Skills</p>
      <div className={styles.skillsList}>
        {skills.map(s => (
          <div key={s.label} className={styles.skillRow}>
            <span className={styles.skillLabel}>{s.label}</span>
            <div className={styles.skillBar}>
              <div
                className={styles.skillFill}
                style={{ width: `${s.level}%` }}
              />
            </div>
            <span className={styles.skillPct}>{s.level}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
