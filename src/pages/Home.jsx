import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Page, Reveal, stagger, item } from '../components/Motion.jsx'
import { Mail, LinkedIn, Phone, Arrow } from '../components/Icons.jsx'

const cards = [
  { tag: 'Research', title: 'University research groups', body: <>Research intern at <a href="https://engineering.purdue.edu/CCE" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', fontWeight: 700, borderBottom: '1px solid currentColor'}}>Purdue's</a> concrete 3D-printing lab and <a href="https://www.utc.edu/college-of-engineering-and-computer-science" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', fontWeight: 700, borderBottom: '1px solid currentColor'}}>UT Chattanooga's</a> combustion &amp; propulsion group, with a <strong>joint RDE publication</strong> in progress.</> },
  { tag: 'Rocketry', title: 'Nationally qualified', body: <>Designed and built rockets on a <strong>nationally competitive</strong> team, qualifying for the national competition in May 2026.</> },
  { tag: 'Leadership', title: '400+ students mentored', body: <>Founded a weekly YMCA chess program and a 1-on-1 tutoring organization serving <strong>400+</strong> students.</> },
  { tag: 'Education', title: 'Neuqua Valley HS', body: <>Naperville, IL · Class of 2028. Coursework in <strong>AP CS A</strong>, honors math, biology, chemistry, and engineering.</> },
]

export default function Home() {
  return (
    <Page>
      <header className="hero">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow">Curriculum Vitae · 2026</div>
          <h1><span className="grad">Aditya<br />Raut</span></h1>
          <div className="role">
            Aerospace Propulsion <span>/</span> Computational Research <span>/</span> Additive Manufacturing
          </div>
          <p className="lede">
            High school researcher focused on <strong>pressure-gain combustion</strong> — from independent
            thermodynamic cycle modeling to <strong>joint publications</strong> with university research groups,
            and hands-on concrete 3D printing at a <strong>top civil engineering lab</strong>.
          </p>

          <div className="contact">
            <a href="mailto:aditya.sraut09@gmail.com"><Mail /> aditya.sraut09@gmail.com</a>
            <a href="https://www.linkedin.com/in/adityaraut09/" target="_blank" rel="noopener"><LinkedIn /> LinkedIn</a>
            <a href="tel:+16309435792"><Phone /> (630) 943-5792</a>
          </div>
        </motion.div>
      </header>

      <section className="section">
        <Reveal className="section-head">
          <span className="num">§ 01</span><h2>Focus</h2>
        </Reveal>
        <Reveal>
          <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', maxWidth: 680, margin: '0 0 4px' }}>
            My work sits at the intersection of <strong style={{ color: 'var(--maroon)' }}>propulsion physics</strong> and computation. I build
            thermodynamic cycle models to quantify why{' '}
            <strong style={{ color: 'var(--maroon)' }}>rotating detonation engines</strong>{' '}
            can outperform conventional propulsion, and I bring that same curiosity to
            <strong style={{ color: 'var(--maroon)' }}> bio-inspired additive manufacturing</strong> in the lab.
          </p>
          <div className="chips" style={{ marginTop: 22 }}>
            {['Pressure-gain combustion', 'Rotating detonation engines', 'Bio-inspired additive manufacturing', 'Computational propulsion modeling'].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </Reveal>

        <motion.div className="stats" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.div className="stat" variants={item}><div className="n">2</div><div className="l">University labs</div></motion.div>
          <motion.div className="stat" variants={item}><div className="n">400+</div><div className="l">Students mentored</div></motion.div>
          <motion.div className="stat" variants={item}><div className="n">1</div><div className="l">Manuscript in progress</div></motion.div>
        </motion.div>
      </section>

      <section className="section">
        <Reveal className="section-head">
          <span className="num">§ 02</span><h2>At a glance</h2>
        </Reveal>
        <motion.div className="grid2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {cards.map((c) => (
            <motion.div className="hcard" key={c.title} variants={item} whileHover={{ y: -3 }}>
              <div className="tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ marginTop: 26, textAlign: 'center' }}>
          <Link to="/research" className="textlink">Explore the research <Arrow /></Link>
        </div>
      </section>
    </Page>
  )
}
