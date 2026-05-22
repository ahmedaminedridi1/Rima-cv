import { useAnimateIn } from '../hooks/useAnimateIn'
import SectionTitle from './SectionTitle.jsx'
import styles from './Competences.module.css'

const skills = [
  {
    category: 'Recrutement & Acquisition',
    items: [
      { name: 'Talent Acquisition', level: 95 },
      { name: 'LinkedIn Recruiter / ATS', level: 90 },
      { name: 'Sourcing Multicanal', level: 88 },
      { name: 'Assessment Centers', level: 85 },
    ]
  },
  {
    category: 'Évaluation & Analyse',
    items: [
      { name: 'Tests psychotechniques', level: 92 },
      { name: 'Analyse comportementale', level: 90 },
      { name: 'Évaluation de potentiels', level: 88 },
      { name: 'Elaboration du compte rendu', level: 85 },
    
    ]
  },
  {
    category: 'Stratégie & Management',
    items: [
      { name: 'Business Partner / RH', level: 88 },
      { name: 'Prospection & Acquisition Client', level: 87 },
      { name: 'Analyse SWOT', level: 85 },
      { name: 'Outils de pilotage (TBP, SMI)', level: 82 },
      { name: 'Management d\'équipe', level: 80 },
    ]
  },
]

const langues = [
  { lang: 'Français', level: 'Professionnel', pct: 95, flag: '🇫🇷' },
 
  { lang: 'Anglais', level: 'Niveau débutant', pct: 30, flag: '🇬🇧' },
]

const interests = ['Littérature', 'Musique', 'Voyages', 'Sports de compétition']

export default function Competences() {
  const ref = useAnimateIn()

  return (
    <section id="competences" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <SectionTitle number="04" title="Compétences" subtitle="Expertise & savoir-faire" />

        <div className={styles.layout}>
          <div className={styles.skillsCol}>
            {skills.map((group, gi) => (
              <div key={gi} className={`${styles.group} animate-in`} style={{ transitionDelay: `${gi * 0.12}s` }}>
                <h4 className={styles.groupTitle}>{group.category}</h4>
                <div className={styles.bars}>
                  {group.items.map((s, si) => (
                    <div key={si} className={styles.bar}>
                      <div className={styles.barInfo}>
                        <span className={styles.barName}>{s.name}</span>
                        <span className={styles.barPct}>{s.level}%</span>
                      </div>
                      <div className={styles.barTrack}>
                        <div
                          className={styles.barFill}
                          style={{ '--w': `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sideCol}>
            {/* Langues */}
            <div className={`${styles.sideCard} animate-in`} style={{ transitionDelay: '0.3s' }}>
              <h4 className={styles.sideTitle}>Langues</h4>
              <div className={styles.langues}>
                {langues.map((l, i) => (
                  <div key={i} className={styles.langue}>
                    <div className={styles.langueTop}>
                      <span className={styles.langueFlag}>{l.flag}</span>
                      <span className={styles.langueName}>{l.lang}</span>
                      <span className={styles.langueLevel}>{l.level}</span>
                    </div>
                    <div className={styles.langueTrack}>
                      <div className={styles.langueFill} style={{ '--w': `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Intérêts */}
            <div className={`${styles.sideCard} animate-in`} style={{ transitionDelay: '0.4s' }}>
              <h4 className={styles.sideTitle}>Centres d'intérêt</h4>
              <div className={styles.tags}>
                {interests.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}