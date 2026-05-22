import { useAnimateIn } from '../hooks/useAnimateIn'
import SectionTitle from './SectionTitle.jsx'
import styles from './Formation.module.css'

const formations = [
  {
    degree: 'Master Pro en Psychologie du Travail & GRH',
    school: 'Université de Tunis',
    year: '2019',
    mention: 'Mention Très Bien',
    recognition: 'Diplôme reconnu par le centre ENIC-NARIC',
    icon: '◈',
  },
  {
    degree: 'Licence en Psychologie',
    school: 'Université de Tunis',
    year: '2015',
    mention: null,
    recognition: 'Diplôme reconnu par le centre ENIC-NARIC',
    icon: '◇',
  },
  {
    degree: 'Baccalauréat Lettres',
    school: 'Lycée Hamouda Pacha',
    year: null,
    mention: null,
    recognition: null,
    icon: '◻',
  },
]

export default function Formation() {
  const ref = useAnimateIn()

  return (
    <section id="formation" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <SectionTitle number="03" title="Formation" subtitle="Parcours académique" />

        <div className={styles.grid}>
          {formations.map((f, i) => (
            <div
              key={i}
              className={`${styles.card} animate-in`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.icon}>{f.icon}</div>
              <div className={styles.content}>
                <div className={styles.top}>
                  <h3 className={styles.degree}>{f.degree}</h3>
                  {f.year && <span className={styles.year}>{f.year}</span>}
                </div>
                <p className={styles.school}>{f.school}</p>
                {f.mention && <p className={styles.mention}>{f.mention}</p>}
                {f.recognition && (
                  <p className={styles.recognition}>
                    <span className={styles.check}>✓</span> {f.recognition}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}