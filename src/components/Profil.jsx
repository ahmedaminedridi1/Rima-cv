import { useAnimateIn } from '../hooks/useAnimateIn'
import SectionTitle from './SectionTitle.jsx'
import styles from './Profil.module.css'

export default function Profil() {
  const ref = useAnimateIn()

  return (
    <section id="profil" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <SectionTitle number="01" title="Profil" subtitle="À propos de moi" />

        <div className={styles.grid}>
          <div className={`${styles.text} animate-in`}>
            <p className={styles.lead} style={{fontSize:"20px"}}>
            Diplômée d’un Master en <em>Psychologie du Travail et GRH</em>, je me positionne comme <em>partenaire stratégique</em> en recrutement, orientée vers l’alignement des talents avec les enjeux business.
            </p>
            <p className={styles.lead} style={{fontSize:"20px"}}>
            Spécialisée dans <em>l’adéquation poste/candidat</em> et la production de synthèses RH structurées, j’accompagne les organisations en <strong>France</strong>, <strong>Belgique</strong> et <strong>Allemagne</strong> dans leurs enjeux <em> de performance, de développement et de transformation</em>.
            </p>
            <p className={styles.lead} style={{fontSize:"20px"}}>
            <em>Ma vision</em> professionnelle repose sur une conviction centrale :<em> un candidat</em> peut devenir un client de demain, et <em>un client</em> satisfait peut se transformer en un partenaire durable fondé sur la confiance et la performance.</p>
          </div>

          <div className={styles.stats}>
            {[
              { value: '5+', label: 'Années d\'expérience' },
              { value: '90%', label: 'Objectifs atteints chez Valeo' },
              { value: '80%', label: 'Engagements honorés' },
              { value: '3', label: 'Pays couverts' },
            ].map((stat, i) => (
              <div key={i} className={`${styles.stat} animate-in`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}