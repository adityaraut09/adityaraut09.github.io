import { motion } from 'framer-motion'
import { Page, Reveal, stagger, item } from '../components/Motion.jsx'

const awards = [
  { tag: 'Rocketry · National', title: 'Rocket ARC Team — Nationally Qualified', when: '2025 – Present', body: <>Designed and built rockets on a <strong>nationally competitive</strong> rocketry team; qualified for the <strong>national competition</strong> in May 2026.</> },
  { tag: 'Chess · State', title: 'Varsity Chess Team — Neuqua Valley HS', when: '2025 – Present', body: <>Won <strong>Sectionals</strong> (Jan 2025) and placed <strong>5th at the Illinois State Championship</strong> (Feb 2026); qualified for <strong>Super Nationals</strong> (May 2025).</> },
  { tag: 'Cricket · Regional', title: 'State U16 Cricket Team — Illinois', when: '2024 – Present', body: <>Competed on the IL U16 regional cricket team in 2024 and 2025; <strong>qualified for national-level competition</strong> both years.</> },
]

const ventures = [
  { org: 'Neuqua Valley × YMCA Chess Camp', role: ' — Founder', date: 'Jan 2024 – Present', meta: 'YMCA · Naperville, IL',
    body: [<>Founded and run a weekly chess program that has reached <strong>400+ elementary and middle school students</strong>.</>, <>Handle enrollment, coordinate with YMCA staff, and coach students one-on-one.</>] },
  { org: 'NVChess+ Tutoring Organization', role: ' — Founder', date: 'Jan 2024 – Present', meta: 'Self-Employed · Naperville, IL',
    body: [<>Tutor students one-on-one in chess strategy and core academic subjects with custom lesson plans.</>, <>Built a repeatable 1-on-1 lesson framework that adapts to each student's level.</>] },
  { org: 'LaunchPad', role: ' — Co-Founder', date: 'Ongoing', meta: 'Career exploration · Naperville, IL',
    body: [<>Free multi-week <strong>career exploration program</strong> for grades 2–8, run by high schoolers.</>] },
  { org: 'Freelance Web & Marketing', role: '', date: 'Ongoing', meta: 'Self-Employed · Naperville, IL',
    body: [<>Build HTML/CSS websites from scratch for local businesses.</>] },
]

export default function Awards() {
  return (
    <Page>
      <header className="page-intro">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow">§ 03 — Leadership & Activities</div>
          <h1>Awards & Leadership</h1>
          <p>Nationally competitive rocketry and chess, regional cricket, and founded programs
            that have reached <strong>hundreds of students</strong>.</p>
        </motion.div>
      </header>

      <section className="section">
        <Reveal className="section-head"><span className="num">§ 01</span><h2>Competition & Awards</h2></Reveal>
        <motion.div className="grid2" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {awards.map((a) => (
            <motion.div className="hcard" key={a.title} variants={item} whileHover={{ y: -3 }}>
              <div className="tag">{a.tag}</div>
              <h3>{a.title}</h3>
              <div className="when">{a.when}</div>
              <p>{a.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <Reveal className="section-head"><span className="num">§ 02</span><h2>Experience & Ventures</h2></Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {ventures.map((v) => (
            <motion.div className="entry" key={v.org} variants={item}>
              <p className="title"><span className="org">{v.org}</span>{v.role}</p>
              <span className="date">{v.date}</span>
              <p className="meta">{v.meta}</p>
              <div className="body">{v.body.map((p, i) => <p key={i}>{p}</p>)}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <Reveal className="section-head"><span className="num">§ 03</span><h2>Education & Interests</h2></Reveal>
        <div className="split">
          <Reveal className="entry" >
            <p className="title"><span className="org">Neuqua Valley High School</span></p>
            <span className="date">Expected May 2028</span>
            <p className="meta">Naperville, IL</p>
            <div className="body">
              <p><strong>Relevant coursework:</strong> AP Computer Science A · Honors Pre-Calculus · Honors Algebra 2/Trig · Honors Biology · Honors Chemistry · Principles of Engineering.</p>
            </div>
          </Reveal>
          <Reveal as="aside" className="sidebar">
            <div className="card">
              <h3>Interests</h3>
              <div className="chips">
                <span className="chip">Chess</span><span className="chip">Cricket</span>
                <span className="chip">Aerospace</span><span className="chip">Stock Investing</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
