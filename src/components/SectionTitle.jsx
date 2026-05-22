import styles from './SectionTitle.module.css'

export default function SectionTitle({ number, title, subtitle }) {
  return (
    <div className={styles.wrap}>
      <span className={styles.number}>{number}</span>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.line} />
    </div>
  )
}