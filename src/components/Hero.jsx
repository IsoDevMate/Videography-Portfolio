import { motion } from 'framer-motion'
import { hero, guestNeed, whatsappGuest } from '../content.js'
import { fadeUp, stagger } from '../motion.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <motion.img
          src="/portrait.jpg"
          alt="Barack Ouma"
          width="1024"
          height="576"
          initial={{ scale: 1.12, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-shade" />
      </div>

      <div className="hero-copy">
        <motion.p
          className="kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {hero.kicker}
        </motion.p>

        <motion.h1 variants={stagger} initial="hidden" animate="show">
          {hero.lines.map((line) => (
            <motion.span key={line} className="hero-line" variants={fadeUp}>
              {line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          {hero.lede}
        </motion.p>
        <motion.p
          className="hero-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {hero.body}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a className="btn" href="#work">
            See the work
          </a>
          <a className="btn btn-ghost" href={whatsappGuest(guestNeed)} target="_blank" rel="noreferrer">
            Get a quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
