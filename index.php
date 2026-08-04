<?php
$whatsapp = 'https://wa.me/971507133095?text=Hello%2C%20I%20want%20a%20surgical%20guide%20design%20for%20my%20case.';
$telegram = 'https://t.me/yourhandle';
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#07111f" />
  <title>Surgical Guides Studio</title>
  <style>
    :root {
      font-family: "Trebuchet MS", "Segoe UI", system-ui, sans-serif;
      color: #e5eef8;
      background:
        radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 30%),
        radial-gradient(circle at top right, rgba(14, 116, 144, 0.16), transparent 26%),
        linear-gradient(180deg, #07111f 0%, #0a1728 45%, #07111f 100%);
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; min-height: 100vh; background: transparent; }
    a { color: inherit; text-decoration: none; }

    .shell {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
    }

    .bg {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }

    .orb {
      position: absolute;
      border-radius: 999px;
      filter: blur(20px);
      opacity: 0.45;
      animation: float 14s ease-in-out infinite;
    }

    .orb-a { width: 24rem; height: 24rem; top: -8rem; left: -6rem; background: radial-gradient(circle, rgba(34, 197, 94, 0.45), transparent 70%); }
    .orb-b { width: 20rem; height: 20rem; top: 10rem; right: -6rem; background: radial-gradient(circle, rgba(56, 189, 248, 0.35), transparent 70%); animation-delay: -5s; }
    .orb-c { width: 18rem; height: 18rem; bottom: 8rem; left: 20%; background: radial-gradient(circle, rgba(251, 191, 36, 0.25), transparent 70%); animation-delay: -9s; }

    .wrap {
      position: relative;
      z-index: 1;
      width: min(1160px, calc(100% - 2rem));
      margin: 0 auto;
    }

    .topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1.2rem 0 0.75rem;
    }

    .eyebrow {
      margin: 0 0 0.35rem;
      color: #7dd3fc;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-size: 0.72rem;
      font-weight: 700;
    }

    .brand {
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .topnav { display: flex; gap: 1rem; flex-wrap: wrap; }
    .topnav a { color: #b8c7d7; font-size: 0.94rem; }
    .topnav a:hover { color: #f8fafc; }

    .hero {
      display: grid;
      grid-template-columns: 1.3fr 0.9fr;
      gap: 1.5rem;
      align-items: center;
      padding: 2rem 0 1rem;
    }

    .hero-copy { padding: 1.25rem 0; }
    .hero-kicker {
      display: inline-flex;
      padding: 0.45rem 0.8rem;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.45);
      color: #cbd5e1;
      font-size: 0.85rem;
      backdrop-filter: blur(14px);
    }

    h1, h2 {
      margin: 0.85rem 0 0;
      font-size: clamp(2.5rem, 6vw, 5.3rem);
      line-height: 0.95;
      letter-spacing: -0.04em;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 1.02;
    }

    p, li, span { color: #b8c7d7; }
    .hero-text { max-width: 62ch; font-size: 1.06rem; margin: 1rem 0 0; }
    .hero-actions, .contact-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin: 1.5rem 0 0; }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3rem;
      padding: 0.85rem 1.2rem;
      border-radius: 999px;
      border: 1px solid transparent;
      transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
    }

    .button:hover { transform: translateY(-2px); }
    .button-primary {
      background: linear-gradient(135deg, #2dd4bf 0%, #38bdf8 100%);
      color: #04111f;
      font-weight: 700;
      box-shadow: 0 18px 40px rgba(45, 212, 191, 0.25);
    }
    .button-secondary {
      border-color: rgba(148, 163, 184, 0.22);
      background: rgba(15, 23, 42, 0.5);
      color: #f8fafc;
      backdrop-filter: blur(14px);
    }

    .hero-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding: 0;
      margin: 1.5rem 0 0;
      list-style: none;
    }
    .hero-pills li {
      padding: 0.7rem 0.95rem;
      border: 1px solid rgba(148, 163, 184, 0.18);
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.42);
      color: #d8e3ee;
      font-size: 0.92rem;
      backdrop-filter: blur(12px);
    }

    .panel-card, .metric-card, .info-card, .process-panel, .contact-band, .stack-item {
      border: 1px solid rgba(148, 163, 184, 0.16);
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.76), rgba(6, 11, 20, 0.82));
      box-shadow: 0 20px 50px rgba(2, 8, 23, 0.28);
      backdrop-filter: blur(18px);
    }

    .panel-card { border-radius: 1.4rem; padding: 1rem; }
    .panel-card-large { min-height: 14rem; padding: 1.2rem; }
    .panel-card strong, .metric-card strong { display: block; color: #f8fafc; font-size: 1.15rem; }
    .panel-label {
      display: inline-flex;
      margin-bottom: 0.9rem;
      padding: 0.35rem 0.6rem;
      border-radius: 999px;
      background: rgba(14, 165, 233, 0.15);
      color: #7dd3fc;
      font-size: 0.74rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .panel-grid, .metrics, .cards-grid, .stack, .timeline { display: grid; gap: 0.9rem; }
    .panel-grid { grid-template-columns: repeat(3, 1fr); }
    .metrics { grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 1.25rem 0 0.5rem; }
    .metric-card { border-radius: 1.2rem; padding: 1rem 1.1rem; }
    .metric-card strong { font-size: clamp(1.5rem, 3vw, 2.1rem); margin-bottom: 0.2rem; }

    .content-grid, .split {
      display: grid;
      gap: 1.25rem;
      padding: 4.25rem 0 0;
    }
    .content-grid { grid-template-columns: 0.95fr 1.05fr; align-items: start; }
    .info-card { border-radius: 1.3rem; padding: 1.2rem; }
    .info-card h3, .stack-item h3, .timeline h3 { margin: 0 0 0.45rem; color: #f8fafc; font-size: 1.05rem; }
    .split { grid-template-columns: 1fr 1fr; align-items: stretch; }
    .feature-list, .process-panel, .contact-band { padding: 1.4rem; border-radius: 1.6rem; }
    .stack-item { display: grid; grid-template-columns: auto 1fr; gap: 1rem; padding: 1rem; border-radius: 1.2rem; }
    .stack-index, .timeline-step {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 2.4rem;
      height: 2.4rem;
      border-radius: 999px;
      background: rgba(45, 212, 191, 0.14);
      color: #7dd3fc;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .timeline { padding: 0; margin: 1.25rem 0 0; list-style: none; }
    .timeline li { display: grid; grid-template-columns: auto 1fr; gap: 1rem; padding: 1rem; border-radius: 1rem; background: rgba(255, 255, 255, 0.03); }

    .contact-band {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.25rem;
      margin: 4.25rem 0 0;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.2rem 0 2rem;
      font-size: 0.92rem;
      color: #b8c7d7;
    }

    .reveal { animation: rise 700ms ease both; }
    @keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes float { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(0,1.2rem,0) scale(1.04); } }

    @media (max-width: 920px) {
      .hero, .content-grid, .split, .contact-band { grid-template-columns: 1fr; display: grid; }
      .metrics, .panel-grid { grid-template-columns: 1fr; }
      .topbar, .footer, .contact-band { align-items: flex-start; flex-direction: column; }
    }

    @media (max-width: 640px) {
      .wrap { width: min(100% - 1rem, 1160px); }
      h1 { font-size: clamp(2.35rem, 11vw, 4rem); }
      .hero-text { font-size: 1rem; }
      .hero-actions, .contact-actions { width: 100%; }
      .button { width: 100%; }
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="bg" aria-hidden="true">
      <span class="orb orb-a"></span>
      <span class="orb orb-b"></span>
      <span class="orb orb-c"></span>
    </div>

    <div class="wrap">
      <header class="topbar">
        <div>
          <p class="eyebrow">Digital dentistry showcase</p>
          <a class="brand" href="#home">Surgical Guides Studio</a>
        </div>
        <nav class="topnav" aria-label="Primary">
          <a href="#guides">Guides</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section class="hero reveal">
          <div class="hero-copy">
            <div class="hero-kicker">Made for digital dentistry teams</div>
            <h1>Modern surgical guides for confident implant placement.</h1>
            <p class="hero-text">
              Show your surgical guide service with a premium, animated landing page built for speed,
              clarity, and lead conversion. Visitors can review the service, then reach your design team
              through WhatsApp or Telegram in one tap.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">Request design service</a>
              <a class="button button-secondary" href="#guides">See what we make</a>
            </div>
            <ul class="hero-pills" aria-label="Highlights">
              <li>Precision-focused surgical guides</li>
              <li>Compatible with modern implant planning workflows</li>
              <li>Clear communication for clinics and lab teams</li>
              <li>Design service handoff through WhatsApp or Telegram</li>
            </ul>
          </div>

          <aside aria-label="Service snapshot">
            <div class="panel-card panel-card-large">
              <span class="panel-label">Service snapshot</span>
              <strong>Guided design workflow</strong>
              <p>Implant planning, sleeve mapping, and production-ready export packaging in one fast presentation.</p>
            </div>
            <div class="panel-grid">
              <div class="panel-card"><strong>24h</strong><span>design response target</span></div>
              <div class="panel-card"><strong>3D</strong><span>guided planning from scan to drill</span></div>
              <div class="panel-card"><strong>Fast</strong><span>built with zero heavy animation libraries</span></div>
            </div>
          </aside>
        </section>

        <section class="metrics reveal">
          <article class="metric-card"><strong>24h</strong><span>design response target</span></article>
          <article class="metric-card"><strong>3D</strong><span>guided planning from scan to drill</span></article>
          <article class="metric-card"><strong>Fast</strong><span>built with zero heavy animation libraries</span></article>
        </section>

        <section id="guides" class="content-grid reveal">
          <div>
            <p class="eyebrow">What you showcase</p>
            <h2>Surgical guide services presented like a premium product.</h2>
            <p>Keep the experience focused on value: precision, collaboration, and a frictionless path to contact your design team.</p>
          </div>
          <div class="cards-grid">
            <article class="info-card">
              <h3>Guides for single and full-arch cases</h3>
              <p>From straightforward posterior placement to more complex full-arch workflows, the presentation stays clinical and clear.</p>
            </article>
            <article class="info-card">
              <h3>Production-ready visual system</h3>
              <p>Modern layouts, crisp typography, and responsive sections make the offer feel premium on desktop and mobile.</p>
            </article>
            <article class="info-card">
              <h3>Lead handoff built in</h3>
              <p>When a visitor asks for design service, the page routes them directly to WhatsApp or Telegram.</p>
            </article>
          </div>
        </section>

        <section class="split reveal">
          <div class="feature-list">
            <p class="eyebrow">Why it works</p>
            <h2>Built for speed, trust, and conversion.</h2>
            <div class="stack">
              <article class="stack-item">
                <span class="stack-index">01</span>
                <div>
                  <h3>Clinical-first message</h3>
                  <p>Speak to surgeons, dentists, and labs without clutter or sales noise.</p>
                </div>
              </article>
              <article class="stack-item">
                <span class="stack-index">02</span>
                <div>
                  <h3>Responsive motion</h3>
                  <p>Subtle gradients, floating shapes, and staggered reveals keep the page alive.</p>
                </div>
              </article>
              <article class="stack-item">
                <span class="stack-index">03</span>
                <div>
                  <h3>Direct chat routing</h3>
                  <p>Design-service leads are sent straight to WhatsApp or Telegram for quick follow-up.</p>
                </div>
              </article>
            </div>
          </div>

          <div class="process-panel" id="process">
            <p class="eyebrow">Workflow</p>
            <h2>How the service flow reads.</h2>
            <ol class="timeline">
              <li><span class="timeline-step">01</span><div><h3>Case intake</h3><p>Receive the scan, implant plan, and restorative target in a clean, review-ready workflow.</p></div></li>
              <li><span class="timeline-step">02</span><div><h3>Guide design</h3><p>Shape a precise surgical guide with sleeve positions, support strategy, and visibility for the surgeon.</p></div></li>
              <li><span class="timeline-step">03</span><div><h3>Delivery</h3><p>Export a production-ready design package and route design-service requests to chat instantly.</p></div></li>
            </ol>
          </div>
        </section>
      </main>

      <section id="contact" class="contact-band reveal">
        <div>
          <p class="eyebrow">Design service inquiries</p>
          <h2>Forward visitors to your chat channels instantly.</h2>
          <p>Replace the placeholder Telegram handle in the code when you are ready, and the buttons will become the fastest route to your design team.</p>
        </div>
        <div class="contact-actions">
          <a class="button button-primary" href="<?= htmlspecialchars($whatsapp, ENT_QUOTES) ?>" target="_blank" rel="noreferrer">WhatsApp</a>
          <a class="button button-secondary" href="<?= htmlspecialchars($telegram, ENT_QUOTES) ?>" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </section>

      <footer class="footer">
        <span>Built for surgical guide showcases in digital dentistry.</span>
        <span>Fast, modern, and ready for your next case.</span>
      </footer>
    </div>
  </div>
</body>
</html>
