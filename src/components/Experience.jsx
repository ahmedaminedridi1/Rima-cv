import { useAnimateIn } from '../hooks/useAnimateIn'
import SectionTitle from './SectionTitle.jsx'
import styles from './Experience.module.css'

const experiences = [
  {
    title: 'Consultante en Recrutement & Business Partner',
    company: 'SHIMI COMPANY',
    type: 'CDI',
    period: 'Juillet 2024 – Avril 2026',
    location: 'Nantes',
    description: 'Société d\'installation électrique et fabrication de pieuvres',
    achievements: [
      'Pilotage stratégique et développement de SHIMI COMPANY (activité étendue à 6 chantiers sur Nantes et périphérie)',
      'Prospection, acquisition clients et analyse SWOT pour orienter la stratégie',
      'Recrutement complet : sourcing, entretiens, évaluation, onboarding et suivi des collaborateurs',
      'Mise en place d\'outils de pilotage (TBP, SMI) pour garantir cohérence et performance',
      
    ],
    result: '80% des engagements honorés (délais, qualité, satisfaction client)',
    current: true,
  },
  {
    title: 'Spécialiste du Recrutement',
    company: 'RY ELEC',
    type: 'Bénévole',
    period: 'Novembre 2022 – Avril 2023',
    location: 'France',
    description: 'Société d\'installation électrique – phase de restructuration',
    achievements: [
      'Recrutement de techniciens en électricité',
      'Gestion des conflits et médiation terrain',
    ],
    result: '0 rupture de ressources sur les chantiers',
    current: false,
  },
  {
    title: 'Talent Acquisition Specialist',
    company: 'VALEO',
    type: 'Mission',
    period: 'Août 2021 – Avril 2022',
    location: 'France',
    description: 'Leader mondial équipement automobile',
    achievements: [
      'Recueil des besoins auprès des managers opérationnels',
      'Rédaction et diffusion d\'annonces ciblées, gestion complète du processus de sélection',
      'Tri des candidatures, conduite des entretiens, reporting et coordination jusqu\'à l\'embauche',
    ],
    result: '90% des objectifs de recrutement atteints en 2 mois · Réduction du no-show de 30% · Reconnaissance par la direction RH',
    current: false,
  },{
    title: 'Chargée de Recrutement → Cheffe d\'Équipe',
    company: 'PROGRESS RH',
    type: 'CDI',
    period: 'Juillet 2019 – Février 2021',
    location: 'Tunis',
    description: 'Cabinet de Conseil en RH',
    achievements: [
      'Recrutement de profils variés : définition des besoins, sourcing multicanal et conduite des entretiens',
      'Évolution au poste de cheffe d\'équipe après un an : encadrement de recruteurs et coordination des missions',
      'Organisation d\'Assessment Centers : évaluation comportementale et psychométrique des candidats',
      'Suivi des KPIs, reporting régulier et amélioration continue des pratiques de recrutement',
    ],
    result: 'Identification et intégration de 4 profils stratégiques en oncologie sur un cycle de 6 semaines',
    current: false,
  },
  
  
  
]

export default function Experience() {
  const ref = useAnimateIn()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <SectionTitle number="02" title="Expérience" subtitle="Parcours professionnel" />

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`${styles.item} animate-in ${exp.current ? styles.current : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.timelineLeft}>
                <div className={styles.dot}>
                  {exp.current && <div className={styles.dotPulse} />}
                </div>
                <div className={styles.lineSegment} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <div className={styles.meta}>
                      <span className={styles.company}>{exp.company}</span>
                      <span className={styles.metaDot}>·</span>
                      <span className={styles.description}>{exp.description}</span>
                    </div>
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={`${styles.type} ${styles[exp.type.toLowerCase()] || ''}`}>{exp.type}</span>
                  </div>
                </div>

                <ul className={styles.achievements}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} className={styles.achievement}>{a}</li>
                  ))}
                </ul>

                <div className={styles.result}>
                  <span className={styles.resultArrow}>→</span>
                  {exp.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}