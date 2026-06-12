import './App.css'

const programs = [
  {
    title: 'Strength Lab',
    text: 'Progressive power sessions for building lean muscle and confidence.',
  },
  {
    title: 'Burn & Flow',
    text: 'A high-energy cardio blend with HIIT intervals and mobility work.',
  },
  {
    title: 'Recovery Reset',
    text: 'Stretch, reset, and recover with guided mobility and breathwork.',
  },
]

const perks = ['Open 5:30 AM – 11:30 PM', 'Certified coaches', 'Free intro assessment']

function App() {
  return (
    <main className="site-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Train harder. Recover smarter.</p>
          <h1>Modern fitness for real results.</h1>
          <p className="lead">
            Step into a gym designed for athletes, busy professionals, and anyone ready to
            transform their routine with expert coaching and an energizing atmosphere.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#membership">Start your free pass</a>
            <a className="btn btn-secondary" href="#programs">Explore classes</a>
          </div>
          <ul className="perk-list">
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-panel" aria-label="Gym highlights">
          <div className="glass-card highlight-card">
            <span>Fresh this month</span>
            <strong>12-week strength challenge</strong>
            <p>Join coached sessions, nutrition tips, and progress check-ins.</p>
          </div>
          <div className="glass-card stat-card">
            <strong>4.9/5</strong>
            <span>member satisfaction</span>
          </div>
          <div className="glass-card stat-card accent">
            <strong>120+</strong>
            <span>weekly class slots</span>
          </div>
        </aside>
      </section>

      <section className="info-grid">
        <article className="glass-card info-card">
          <h2>Why members love it</h2>
          <p>Flexible memberships, high-end equipment, and a community that keeps you motivated.</p>
        </article>
        <article className="glass-card info-card">
          <h2>Train with purpose</h2>
          <p>From functional strength to recovery sessions, every workout is built to fit real life.</p>
        </article>
        <article className="glass-card info-card">
          <h2>Built for every level</h2>
          <p>Whether you are just starting or leveling up, our coaches tailor every plan to your goals.</p>
        </article>
      </section>

      <section id="programs" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Programs</p>
          <h2>Choose your training style</h2>
        </div>
        <div className="cards-grid">
          {programs.map((item) => (
            <article className="glass-card program-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>New classes every week</span>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <article className="glass-card schedule-card">
          <p className="eyebrow">This week</p>
          <h2>Daily classes & open gym</h2>
          <ul>
            <li>06:30 — Sunrise Strength</li>
            <li>12:00 — Lunch Burn</li>
            <li>18:30 — Team Power</li>
            <li>20:00 — Mobility Flow</li>
          </ul>
        </article>

        <article id="membership" className="glass-card pricing-card">
          <p className="eyebrow">Membership</p>
          <h2>Start today</h2>
          <p>Begin with a free intro session and a custom training plan tailored to your goals.</p>
          <div className="price-box">$29<span>/month</span></div>
          <a className="btn btn-primary full-width" href="mailto:hello@pulsefit.example">Book a consultation</a>
        </article>
      </section>
    </main>
  )
}

export default App
