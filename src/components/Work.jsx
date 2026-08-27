import { motion } from 'framer-motion'
import { work, whatsappGuest, emailGuest } from '../content.js'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Work() {
  return (
    <section className="work" id="work">
      <motion.header
        className="block-head"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.p className="kicker" variants={fadeUp}>
          {work.kicker}
        </motion.p>
        <motion.h2 variants={fadeUp}>{work.headline}</motion.h2>
      </motion.header>

      <motion.ol
        className="work-list"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {work.items.map((item) => (
          <motion.li key={item.num} className="work-row" variants={fadeUp}>
            <span className="work-num">{item.num}</span>
            <div className="work-copy">
              <h3>{item.title}</h3>
              <p>{item.get}</p>
            </div>
            <div className="work-act">
              <a href={whatsappGuest(item.need)} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={emailGuest(item.need)}>Email</a>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
