import './App.css'

const WHATSAPP_URL = 'https://wa.me/971507133095?text=Hello%2C%20I%20want%20a%20surgical%20guide%20design%20for%20my%20case.'
const TELEGRAM_URL = 'https://t.me/yourhandle'

const proofPoints = [
  { value: '24h', label: 'design response target' },
  { value: '3D', label: 'guided planning from scan to drill' },
  { value: 'Fast', label: 'built with zero heavy animation libraries' },
]

const guideStages = [
  {
    title: 'Case intake',
    description: 'Receive the scan, implant plan, and restorative target in a clean, review-ready workflow.',
  },
  {
    title: 'Guide design',
    description: 'Shape a precise surgical guide with sleeve positions, support strategy, and visibility for the surgeon.',
  },
  {
    title: 'Delivery',
    description: 'Export a production-ready design package and route design-service requests to chat instantly.',
  },
]

const advantages = [
  'Precision-focused surgical guides for digital dentistry',
  'Compatible with modern implant planning workflows',
  'Clear communication for clinics and lab teams',
  'Design service handoff through WhatsApp or Telegram',
]

const offerings = [
  {
    title: 'Guides for single and full-arch cases',
    body: 'From straightforward posterior placement to more complex full-arch workflows, the presentation stays clinical and clear.',
  },
  {
    title: 'Production-ready visual system',
    body: 'Modern layouts, crisp typography, and responsive sections make the offer feel premium on desktop and mobile.',
  },
  {
    title: 'Lead handoff built in',
    body: 'When a visitor asks for design service, the page routes them directly to WhatsApp or Telegram.',
  },
]

function App() {
  return (
    <div className="site-shell">
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
        <nav className="topnav" aria-label="Primary">
          <a href="#guides">Guides</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section reveal">
          <div className="hero-copy">
            <div className="hero-kicker">Made for digital dentistry teams</div>
            <h1>Modern surgical guides for confident implant placement.</h1>
            <p className="hero-text">
              Show your surgical guide service with a premium, animated landing page built for speed,
              clarity, and lead conversion. Visitors can review the service, then reach your design team
              through WhatsApp or Telegram in one tap.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request design service
              </a>
              <a className="button button-secondary" href="#guides">
                See what we make
              </a>
            </div>
            <ul className="hero-pills" aria-label="Highlights">
              {advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel" aria-label="Service snapshot">
            <div className="panel-card panel-card-large">
              <span className="panel-label">Service snapshot</span>
              <strong>Guided design workflow</strong>
              <p>
                Implant planning, sleeve mapping, and production-ready export packaging in one fast
                presentation.
              </p>
            </div>

            <div className="panel-grid">
              {proofPoints.map((point) => (
                <div className="panel-card" key={point.label}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section metrics reveal">
          {proofPoints.map((point) => (
            <article className="metric-card" key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </section>

        <section id="guides" className="section content-grid reveal">
          <div className="section-heading">
            <p className="eyebrow">What you showcase</p>
            <h2>Surgical guide services presented like a premium product.</h2>
            <p>
              Keep the experience focused on value: precision, collaboration, and a frictionless path to
              contact your design team.
            </p>
          </div>

          <div className="cards-grid">
            {offerings.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split reveal">
          <div className="feature-list">
            <p className="eyebrow">Why it works</p>
            <h2>Built for speed, trust, and conversion.</h2>
            <div className="stack">
              <article className="stack-item">
                <span className="stack-index">01</span>
                <div>
                  <h3>Clinical-first message</h3>
                  <p>Speak to surgeons, dentists, and labs without clutter or sales noise.</p>
                </div>
              </article>
              <article className="stack-item">
                <span className="stack-index">02</span>
                <div>
                  <h3>Responsive motion</h3>
                  <p>Subtle gradients, floating shapes, and staggered reveals keep the page alive.</p>
                </div>
              </article>
              <article className="stack-item">
                <span className="stack-index">03</span>
                <div>
                  <h3>Direct chat routing</h3>
                  <p>Design-service leads are sent straight to WhatsApp or Telegram for quick follow-up.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="process-panel" id="process">
            <p className="eyebrow">Workflow</p>
            <h2>How the service flow reads.</h2>
            <ol className="timeline">
              {guideStages.map((stage, index) => (
                <li key={stage.title}>
                  <span className="timeline-step">0{index + 1}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <section id="contact" className="section contact-band reveal">
        <div>
          <p className="eyebrow">Design service inquiries</p>
          <h2>Forward visitors to your chat channels instantly.</h2>
          <p>
            Replace the placeholder links in the code with your real WhatsApp number and Telegram handle,
            and the buttons will become the fastest route to your design team.
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

