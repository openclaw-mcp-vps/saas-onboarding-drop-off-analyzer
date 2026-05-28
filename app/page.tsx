export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  const faqs = [
    {
      q: "How do I install the tracking SDK?",
      a: "Paste one script tag into your app and call onboardiq.track('step_name') at each onboarding step. No backend changes needed."
    },
    {
      q: "What data do you collect?",
      a: "Only anonymous step-completion events tied to a session ID. No PII is stored unless you explicitly pass it."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find where users drop off in your{" "}
          <span className="text-[#58a6ff]">onboarding flow</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Embed one script tag, capture every onboarding step, and get an instant dashboard showing exactly where users quit — with AI-powered suggestions to fix it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $17 / mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No credit card required for 7-day trial · Cancel anytime</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited onboarding flows",
              "Real-time drop-off dashboard",
              "AI fix suggestions per step",
              "JavaScript SDK + REST API",
              "Up to 50,000 events / mo",
              "Email alerts on spike drop-offs"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
