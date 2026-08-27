import { motion } from 'framer-motion'
import { brand, contact, emailGuest, guestNeed } from '../content.js'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.p className="kicker" variants={fadeUp}>
          {contact.kicker}
        </motion.p>
        <motion.h2 variants={fadeUp}>{contact.headline}</motion.h2>
        <motion.p className="contact-body" variants={fadeUp}>
          {contact.body}
        </motion.p>
      </motion.div>

      <motion.div
        className="contact-list"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.a variants={fadeUp} href={brand.whatsappChat} target="_blank" rel="noopener noreferrer">
          <span>WhatsApp</span>
          <strong>{brand.phoneDisplay}</strong>
        </motion.a>
        <motion.a variants={fadeUp} href={emailGuest(guestNeed)}>
          <span>Email</span>
          <strong>{brand.email}</strong>
        </motion.a>
        <motion.a variants={fadeUp} href={`tel:${brand.phoneTel}`}>
          <span>Call</span>
          <strong>{brand.phoneDisplay}</strong>
        </motion.a>
        <motion.a variants={fadeUp} href={brand.instagram} target="_blank" rel="noreferrer">
          <span>Instagram</span>
          <strong>{brand.handle}</strong>
        </motion.a>
      </motion.div>
    </section>
  )
}
