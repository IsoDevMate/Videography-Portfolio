import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import QRCode from 'qrcode'
import { brand } from '../content.js'

function CropMarks() {
  return (
    <>
      <span className="crop crop-tl" aria-hidden="true" />
      <span className="crop crop-tr" aria-hidden="true" />
      <span className="crop crop-bl" aria-hidden="true" />
      <span className="crop crop-br" aria-hidden="true" />
    </>
  )
}

export default function Cards() {
  const [qr, setQr] = useState('')

  useEffect(() => {
    QRCode.toString(brand.whatsappChat, {
      type: 'svg',
      margin: 0,
      color: { dark: '#1a2c3d', light: '#00000000' },
      width: 256,
    }).then(setQr)
  }, [])

  return (
    <div className="cards-page">
      <header className="cards-toolbar">
        <Link to="/" className="cards-back">
          ← {brand.mark}
        </Link>
        <div>
          <p className="kicker">Print shop</p>
          <h1>Business cards</h1>
        </div>
        <button type="button" className="btn btn-solid" onClick={() => window.print()}>
          Print / Save PDF
        </button>
      </header>

      <p className="cards-help">
        90 × 50 mm — the size most Kenyan print shops cut. Print both sides, or save
        as PDF (actual size, no margins). Crop marks on screen show the cut; they
        hide when you print.
      </p>

      <div className="cards-sheet">
        <div className="card-mount">
          <CropMarks />
          <article className="print-card card-front">
            <img src="/portrait-card.jpg" alt="" />
            <div className="card-front-shade" />
            <div className="card-front-type">
              <p className="card-mark">{brand.mark}</p>
              <p className="card-name">{brand.name}</p>
              <p className="card-role">Videography · Presence</p>
            </div>
            <p className="card-city">{brand.city}</p>
          </article>
        </div>

        <div className="card-mount">
          <CropMarks />
          <article className="print-card card-back">
            <div className="card-back-top">
              <p className="card-mark dark">{brand.mark}</p>
              <p className="card-back-kicker">The work</p>
            </div>
            <ul className="card-services">
              <li>Social — stories, DMs, the daily presence</li>
              <li>Shoot &amp; ads</li>
              <li>Advanced cut, exclusively</li>
            </ul>
            <div className="card-back-foot">
              <div>
                <p>{brand.phoneDisplay}</p>
                <p>{brand.email}</p>
                <p>{brand.handle}</p>
                <p>{brand.city}</p>
              </div>
              <div
                className="card-qr"
                aria-label="WhatsApp QR"
                dangerouslySetInnerHTML={{ __html: qr }}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
