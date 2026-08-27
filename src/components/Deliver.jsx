import { motion } from 'framer-motion'
import { deliver } from '../content.js'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Deliver() {
  return (
    <section className="deliver" id="deliver">
      <motion.header
        className="block-head"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.p className="kicker" variants={fadeUp}>
          {deliver.kicker}
        </motion.p>
        <motion.h2 variants={fadeUp}>{deliver.headline}</motion.h2>
      </motion.header>

      <motion.ul
        className="deliver-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {deliver.items.map((item) => (
          <motion.li key={item.title} className="deliver-card" variants={fadeUp}>
            <h3>{item.title}</h3>
            <p>{item.get}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
