export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find where users drop off in your{' '}
          <span className="text-[#58a6ff]">onboarding flow</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Embed one script, define your steps, and instantly see which onboarding stage kills your activation rate — with AI-powered fix suggestions.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {['Step-by-step funnel tracking','Drop-off heatmaps','SDK in 2 lines of JS','Actionable AI suggestions','Slack alerts','CSV export'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#8b949e] mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited onboarding funnels',
              'Up to 50,000 tracked events/mo',
              'JavaScript SDK + React hooks',
              'AI drop-off suggestions',
              'Slack & email alerts',
              'CSV & JSON export',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How do I integrate the tracking SDK?',
              a: 'Add one <script> tag or install our npm package, then call onboard.track("step_name") at each onboarding milestone. Setup takes under 5 minutes.',
            },
            {
              q: 'What counts as a tracked event?',
              a: 'Every call to onboard.track() counts as one event. The 50,000/mo limit covers most early-stage SaaS products comfortably.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time — no questions asked, no lock-in.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Onboarding Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
