import { useAnimateIn } from '../hooks/useAnimateIn'
import SectionTitle from './SectionTitle.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useAnimateIn()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <SectionTitle number="05" title="Contact" subtitle="Travaillons ensemble" />

        <div className={styles.layout}>
          <div className={`${styles.left} animate-in`}>
            <p className={styles.intro}>
              Disponible pour des opportunités en recrutement, conseil RH, 
              ou missions en talent acquisition sur la France et à l'international.
            </p>

            <div className={styles.links}>
              <a href="mailto:rimdridi12@gmail.com" className={styles.link}>
                <div className={styles.linkIcon}>✉</div>
                <div className={styles.linkContent}>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkValue}>rimdridi12@gmail.com</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>

              <a href="tel:+33607297576" className={styles.link}>
                <div className={styles.linkIcon}>✆</div>
                <div className={styles.linkContent}>
                  <span className={styles.linkLabel}>Téléphone</span>
                  <span className={styles.linkValue}>+33 607 297 576</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>

              <a href="https://linkedin.com/in/rim-dridi" target="_blank" rel="noreferrer" className={styles.link}>
                <div className={styles.linkIcon}>in</div>
                <div className={styles.linkContent}>
                  <span className={styles.linkLabel}>LinkedIn</span>
                  <span className={styles.linkValue}>Rim DRIDI</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>

              <div className={styles.link}>
                <div className={styles.linkIcon}>◎</div>
                <div className={styles.linkContent}>
                  <span className={styles.linkLabel}>Localisation</span>
                  <span className={styles.linkValue}>Nantes, France</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.right} animate-in`} style={{ transitionDelay: '0.15s' }}>
            <div className={styles.availability}>
              <div className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>Disponible</p>
                <p className={styles.availSub}>Ouverte aux opportunités</p>
              </div>
            </div>

            <div className={styles.quote}>
              <span className={styles.quoteMarks}>"</span>
              <p>
                Détecter les potentiels là où d'autres voient des candidats, 
                c'est la différence entre recruter et vraiment construire.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerName}>Ruby Rim DRIDI</p>
          <p className={styles.footerCopy}>Talent Acquisition Spécialiste · Nantes, France</p>
        </div>
      </div>
    </section>
  )
}