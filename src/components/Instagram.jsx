import { motion } from 'framer-motion'
import { brand, instagram } from '../content.js'
import { fadeUp, stagger, viewport } from '../motion.js'

function embedSrc(url) {
  return `${url.replace(/\/?$/, '/')}embed`
}

export default function Instagram() {
  const posts = brand.instagramPosts.slice(0, 6)

  return (
    <section className="ig" id="instagram">
      <motion.header
        className="block-head"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.p className="kicker" variants={fadeUp}>
          {instagram.kicker}
        </motion.p>
        <motion.h2 variants={fadeUp}>{instagram.headline}</motion.h2>
        <motion.p className="ig-body" variants={fadeUp}>
          {instagram.body}
        </motion.p>
      </motion.header>

      <div className="ig-posts">
        {posts.map((url) => (
          <article key={url} className="ig-embed">
            <iframe
              title="Instagram post from @snrdev001"
              src={embedSrc(url)}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
            <a className="ig-open" href={url} target="_blank" rel="noreferrer">
              Open post
            </a>
          </article>
        ))}
      </div>

      <a className="btn" href={brand.instagram} target="_blank" rel="noreferrer">
        See all on Instagram
      </a>
    </section>
  )
}
