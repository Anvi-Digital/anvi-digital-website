export default function TrustAndFAQ() {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black uppercase mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
          <div className="p-8 bg-surface-container-low border-l-8 border-on-surface">
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
    </section>
  );
}
