import { motion } from 'framer-motion'
import { process } from '../content.js'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Process() {
  return (
    <section className="process">
      <p className="kicker">{process.kicker}</p>
      <motion.ol
        className="process-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {process.steps.map((step) => (
          <motion.li key={step.num} variants={fadeUp}>
            <span>{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
