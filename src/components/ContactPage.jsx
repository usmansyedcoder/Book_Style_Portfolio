import styles from './Pages.module.css'
import { contact } from '../data/portfolio.js'

export default function ContactPage() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.chapterLine}><span>Chapter IV</span></div>
      <h1 className={styles.pageTitle}>Contact</h1>
      <p className={styles.pageTitleItalic}>Let's connect</p>
      <div className={styles.divider} />

      {contact.map(c => (
        <div key={c.label} className={styles.contactItem}>
          <div className={styles.contactIcon}>{c.icon}</div>
          <div>
            <div className={styles.contactLabel}>{c.label}</div>
            <div className={styles.contactValue}>{c.value}</div>
          </div>
        </div>
      ))}

      <div className={styles.ornament} style={{ marginTop: '24px' }}>— fin —</div>
    </div>
  )
}
