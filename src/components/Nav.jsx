import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Profil', href: '#profil' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Formation', href: '#formation' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoInitials}>RR</span>
          <span className={styles.logoDivider} />
          <span className={styles.logoName}>Ruby Rim Dridi</span>
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:rimdridi12@gmail.com"
              className={styles.cta}
              onClick={() => setMenuOpen(false)}
            >
              Me contacter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}