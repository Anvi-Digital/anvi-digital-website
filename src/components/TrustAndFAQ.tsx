const faqs = [
  {
    question: "How quickly can we see results?",
    answer:
      "Immediate optimizations start within 48 hours. Substantial growth compound results typically manifest between 45-90 days as algorithms stabilize.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, provided there is Product-Market Fit. We specialize in scaling what already works into a market-dominating force.",
  },
  {
    question: "Is the AI custom built?",
    answer:
      "Every deployment is bespoke. We leverage foundation models but build custom RAG pipelines and proprietary logic tailored to your data.",
  },
];

export default function TrustAndFAQ() {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Testimonials Column */}
          <div>
            <h2 className="text-6xl font-black uppercase mb-16">
              The Verdict.
            </h2>
            <div className="space-y-12">
              {/* Testimonial 1 */}
              <div className="p-8 bg-surface-container-low border-l-8 border-secondary">
                <p className="text-xl italic mb-6">
                  &ldquo;Anvi Digital didn&apos;t just give us a strategy; they
                  gave us an engine. Our lead acquisition costs dropped by 40%
                  in three months.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-on-surface rounded-full flex items-center justify-center text-surface font-bold">
                    JS
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-widest">
                      Jordan Smith
                    </p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                      CEO, NexTech Global
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 bg-surface-container-low border-l-8 border-on-surface translate-x-4 md:translate-x-12">
                <p className="text-xl italic mb-6">
                  &ldquo;14+ recommendations on LinkedIn for a reason. Their AI
                  implementation is lightyears ahead of standard agency
                  offerings.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-on-surface rounded-full flex items-center justify-center text-surface font-bold">
                    AR
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-widest">
                      Alex Rivera
                    </p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                      CTO, AuraPay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div>
            <h2 className="text-6xl font-black uppercase mb-16">FAQ</h2>
            <div className="divide-y divide-surface-variant">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex justify-between items-center font-bold text-xl uppercase cursor-pointer list-none">
                    {faq.question}
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
