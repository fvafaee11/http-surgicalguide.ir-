import { useEffect, useState } from 'react'
import './App.css'

const WHATSAPP_URL =
  'https://wa.me/971507133095?text=Hello%2C%20I%20want%20a%20surgical%20guide%20design%20for%20my%20case.'
const TELEGRAM_URL = 'https://t.me/yourhandle'

const proofPoints = [
  { value: '8+', label: 'real case photos in the gallery' },
  { value: '24h', label: 'design response target' },
  { value: 'exocad', label: 'workflow-ready planning visuals' },
]

const galleryItems = [
  {
    src: '/showcase/guide-04.jpg',
    title: 'Drill-through guide',
    caption: 'Surgical guide in use with handpiece alignment.',
    size: 'tall',
  },
  {
    src: '/showcase/planning-05.jpg',
    title: 'Planning overview',
    caption: 'CT, guide paths, and implant position planning.',
    size: 'wide',
  },
  {
    src: '/showcase/guide-01.jpg',
    title: 'Guide body',
    caption: 'Clear sleeve window and white resin guide shell.',
    size: 'normal',
  },
  {
    src: '/showcase/guide-02.jpg',
    title: 'Multi-sleeve guide',
    caption: 'Precision sleeve layout for guided placement.',
    size: 'normal',
  },
  {
    src: '/showcase/guide-03.jpg',
    title: 'Full-arch support',
    caption: 'Arch-based guide with fixation and stabilization.',
    size: 'wide',
  },
  {
    src: '/showcase/guide-06.jpg',
    title: 'Intraoral view',
    caption: 'Full-mouth surgical guide seated for live use.',
    size: 'tall',
  },
  {
    src: '/showcase/planning-07.jpg',
    title: '3D guided pathway',
    caption: 'Digital drill path and guide geometry view.',
    size: 'normal',
  },
  {
    src: '/showcase/guide-08.jpg',
    title: 'U-shaped guide',
    caption: 'Open arch format for posterior access and stability.',
    size: 'normal',
  },
]

const workflowCards = [
  {
    src: '/showcase/exocad-studio.svg',
    title: 'exocad planning panel',
    body: 'Show exocad-style surgical workflow, model setup, and guide export with a clean studio look.',
  },
  {
    src: '/showcase/3shape-workflow.svg',
    title: '3Shape workflow board',
    body: 'Present planning, implant path, and design review in a polished 3Shape-inspired layout.',
  },
  {
    src: '/showcase/implant-guide.svg',
    title: 'Finished surgical guide',
    body: 'Highlight the final printable guide with a premium render that feels showroom-ready.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px' },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="site-bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>

      <header className="topbar">
        <div>
          <p className="eyebrow">Digital dentistry showcase</p>
          <a className="brand" href="#home">
            Surgical Guides Studio
          </a>
        </div>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={`topnav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#workflow" onClick={closeMenu}>Workflow</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a case</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section is-visible" data-reveal>
          <div className="hero-copy">
            <div className="hero-kicker">Made for digital dentistry teams</div>
            <h1>Modern surgical guides for <span>confident implant placement.</span></h1>
            <p className="hero-text">
              Show your surgical guide service with a premium, image-led landing page built for speed,
              clarity, and lead conversion. Visitors can review real guide cases, exocad-style planning,
              and 3Shape workflow visuals before reaching your design team in one tap.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request design service
              </a>
              <a className="button button-secondary" href="#gallery">
                See the photo gallery
              </a>
            </div>
            <ul className="hero-pills" aria-label="Highlights">
              <li>Precision-focused surgical guides</li>
              <li>Real case photos and workflow imagery</li>
              <li>Compatible with exocad and 3Shape style planning</li>
              <li>Direct chat handoff for design service</li>
            </ul>
          </div>

          <aside className="hero-visual" aria-label="Featured guide preview">
            <div className="hero-shot hero-shot-main">
              <img src="/showcase/guide-04.jpg" alt="Dental implant surgical guide with handpiece drilling through a sleeve" />
              <div className="hero-shot-overlay">
                <span className="panel-label">featured case</span>
                <strong>Guided drilling in action</strong>
                <p>Single case, clean sleeve access, and precise placement.</p>
              </div>
            </div>
            <div className="hero-shot-grid">
              <div className="hero-shot hero-shot-small">
                <img src="/showcase/guide-03.jpg" alt="Full-arch surgical guide with fixation hardware" />
              </div>
              <div className="hero-shot hero-shot-small">
                <img src="/showcase/planning-07.jpg" alt="Implant planning screen showing guide and CT slices" />
              </div>
            </div>
          </aside>
        </section>

        <section className="section metrics" data-reveal>
          {proofPoints.map((point, index) => (
            <article className="metric-card" key={point.label} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </section>

        <section id="gallery" className="section gallery-section" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">Case gallery</p>
            <h2>Use real-looking dental implant guide photos, not empty placeholders.</h2>
            <p>
              This gallery combines surgical guides, live drilling views, CT planning, and digital workflow
              images so the page feels much more credible and much less flat.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <article className={`gallery-card gallery-card--${item.size}`} key={item.title} data-reveal style={{ '--delay': `${(index % 3) * 80}ms` } as React.CSSProperties}>
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-card-copy">
                  <span className="panel-label">{item.title}</span>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" data-reveal>
          <div className="feature-list">
            <p className="eyebrow">Why it works</p>
            <h2>Built for speed, trust, and conversion.</h2>
            <div className="stack">
              <article className="stack-item" data-reveal>
                <span className="stack-index">01</span>
                <div>
                  <h3>Clinical-first message</h3>
                  <p>Speak to surgeons, dentists, and labs without clutter or sales noise.</p>
                </div>
              </article>
              <article className="stack-item" data-reveal>
                <span className="stack-index">02</span>
                <div>
                  <h3>Real case imagery</h3>
                  <p>Show actual guide photos, drill-through views, and planning screenshots.</p>
                </div>
              </article>
              <article className="stack-item" data-reveal>
                <span className="stack-index">03</span>
                <div>
                  <h3>Direct chat routing</h3>
                  <p>Design-service leads are sent straight to WhatsApp or Telegram for quick follow-up.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="process-panel" id="workflow">
            <p className="eyebrow">Workflow</p>
            <h2>How the service flow reads.</h2>
            <div className="workflow-grid">
              {workflowCards.map((card, index) => (
                <article className="workflow-card" key={card.title} data-reveal style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
                  <img src={card.src} alt={card.title} loading="lazy" />
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="section contact-band" data-reveal>
        <div>
          <p className="eyebrow">Design service inquiries</p>
          <h2>Forward visitors to your chat channels instantly.</h2>
          <p>
            Replace the placeholder Telegram handle in the code when you are ready, and the buttons will
            become the fastest route to your design team.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="button button-secondary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>Built for surgical guide showcases in digital dentistry.</span>
        <span>Fast, modern, and ready for your next case.</span>
      </footer>
    </div>
  )
}

export default App
