import { motion } from 'framer-motion'
import { Page, Reveal, stagger, item } from '../components/Motion.jsx'

const entries = [
  {
    org: 'Purdue University',
    orgUrl: 'https://engineering.purdue.edu/CCE',
    role: ' — Research Intern',
    date: 'Jun 2026 – Present',
    meta: 'Concrete 3D Printing Team · Lyles School of Civil & Construction Eng. · West Lafayette, IN',
    body: [
      <>Work in the Architected Materials group on 3D-printing <strong>sinusoidal Bouligand structures</strong> — layered patterns inspired by naturally tough materials such as the mantis shrimp claw.</>,
      <>Calibrate the team's concrete 3D printer and produce specimens for ongoing <strong>fracture experiments</strong>.</>,
    ],
  },
  {
    org: 'Univ. of Tennessee at Chattanooga',
    orgUrl: 'https://www.utc.edu/college-of-engineering-and-computer-science',
    role: ' — Research Intern',
    date: 'Jun 2026 – Present',
    meta: 'Combustion & Propulsion Research Group · Remote',
    body: [
      <>Recruited after independently building a thermodynamic comparison of <strong>rotating detonation engines</strong>.</>,
      <>Contribute pressure-gain cycle analysis toward a <strong>joint publication</strong> within the group's broader RDE research.</>,
    ],
  },
  {
    org: 'Independent Research',
    role: ' — RDE Propulsion',
    date: 'Sep 2025 – Present',
    meta: 'Self-Directed · Naperville, IL',
    body: [
      <>Investigate the thermodynamic efficiency of rotating detonation engines against conventional <strong>Brayton-cycle</strong> propulsion systems.</>,
      <>Build cycle models using <a href="https://cantera.org/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', fontWeight: 600, borderBottom: '1px solid currentColor'}}>Cantera</a> and <a href="https://shepherd.caltech.edu/EDL/PublicResources/sdt/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', fontWeight: 600, borderBottom: '1px solid currentColor'}}>SDToolbox</a> to quantify pressure-gain efficiency; <strong>manuscript in progress</strong> for a pre-collegiate research journal.</>,
    ],
  },
]

export default function Research() {
  return (
    <Page>
      <header className="page-intro">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow">§ 01 — Research</div>
          <h1>Research</h1>
          <p>Independent thermodynamic modeling of rotating detonation engines, extended into
            collaborations with university propulsion and additive-manufacturing labs.</p>
        </motion.div>
      </header>

      <section className="section split">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {entries.map((e) => (
            <motion.div className="entry" key={e.org + e.role} variants={item}>
              <p className="title">
                <span className="org">
                  {e.orgUrl ? (
                    <a href={e.orgUrl} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor'}}>
                      {e.org}
                    </a>
                  ) : e.org}
                </span>
                {e.role}
              </p>
              <span className="date">{e.date}</span>
              <p className="meta">{e.meta}</p>
              <div className="body">{e.body.map((p, i) => <p key={i}>{p}</p>)}</div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal as="aside" className="sidebar">
          <div className="card">
            <h3>Technical Skills</h3>
            <div className="group">
              <div className="label">Computation & Modeling</div>
              <div className="chips">
                <span className="chip">Java</span><span className="chip">Cantera</span><span className="chip">SDToolbox</span>
              </div>
            </div>
            <div className="group">
              <div className="label">Propulsion & Engineering</div>
              <div className="chips">
                <span className="chip">RDE Analysis</span><span className="chip">Thermo Cycles</span><span className="chip">3D Printing</span>
              </div>
            </div>
            <div className="group">
              <div className="label">Web & Digital</div>
              <div className="chips">
                <span className="chip">HTML/CSS</span><span className="chip">Web Design</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Focus Areas</h3>
            <ul className="stack-list">
              <li>Pressure-gain combustion</li>
              <li>Rotating detonation engines</li>
              <li>Bio-inspired additive manufacturing</li>
              <li>Computational propulsion modeling</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="banner">
          <div className="eyebrow">Working thesis</div>
          <p>Quantifying how rotating detonation engines convert pressure gain into
            real thermodynamic efficiency — and what that means for the next generation of propulsion.</p>
        </Reveal>
      </section>
    </Page>
  )
}
