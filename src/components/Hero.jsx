import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      setTimeout(() => el.classList.add(styles.loaded), 100)
    }
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Decorative background elements */}
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />
      <div className={styles.grain} />

      <div className={styles.container}>
        {/* Left: Photo */}
        <div className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            <img
              src="/images/Photo_cv.jpg"
              alt="Ruby Rim DRIDI"
              className={styles.photo}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className={styles.photoOverlay} />
          </div>
          <div className={styles.photoDecor} />
        </div>

        {/* Right: Info */}
        <div className={styles.info}>
          <div className={styles.badge}>Talent Acquisition Spécialiste</div>

          <h1 className={styles.name}>
            <span className={styles.nameFirst}>Ruby Rim</span>
            <span className={styles.nameLast}>DRIDI</span>
          </h1>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDot} />
            <span className={styles.dividerLine} />
          </div>

          <p className={styles.tagline}>
            Chasseuse de têtes aguerrie  · 
            Experte en évaluation de potentiels  · Accompagnement stratégique et acquisition client
          </p>

          <div className={styles.contacts}>
            <a href="mailto:rimdridi12@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              rimdridi12@gmail.com
            </a>
            <a href="tel:+33607297576" className={styles.contactItem}>
              <span className={styles.contactIcon}>✆</span>
              +33 607 297 576
            </a>
            <a href="https://linkedin.com/in/rim-dridi" target="_blank" rel="noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>in</span>
              Rim DRIDI · LinkedIn
            </a>
            <span className={styles.contactItem}>
              <span className={styles.contactIcon}>◎</span>
              Nantes, France
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}