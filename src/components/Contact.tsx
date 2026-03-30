export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 bg-on-background text-surface">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column — Headline & Info */}
        <div>
          <h2 className="text-7xl font-black uppercase leading-none mb-8">
            Ready to
            <br />
            Evolve?
          </h2>
          <p className="text-2xl text-surface/60 mb-12">
            Stop guessing. Start growing. Let&apos;s build your
            intelligence-led future today.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              <a href="mailto:growth@anvi.digital" className="text-xl hover:text-secondary transition-colors">growth@anvi.digital</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                location_on
              </span>
              <span className="text-xl">
                London &bull; San Francisco &bull; Remote
              </span>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <form className="space-y-8">
          <div>
            <label htmlFor="full-name" className="block uppercase tracking-widest text-xs font-bold mb-2 text-surface/40">
              Full Name
            </label>
            <input
              id="full-name"
              name="full_name"
              autoComplete="name"
              aria-required="true"
              className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:ring-0 focus:border-secondary transition-colors py-4 text-xl placeholder:text-surface/10"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="work-email" className="block uppercase tracking-widest text-xs font-bold mb-2 text-surface/40">
              Work Email
            </label>
            <input
              id="work-email"
              name="work_email"
              autoComplete="email"
              aria-required="true"
              className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:ring-0 focus:border-secondary transition-colors py-4 text-xl placeholder:text-surface/10"
              placeholder="john@company.com"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="inquiry-type" className="block uppercase tracking-widest text-xs font-bold mb-2 text-surface/40">
              Inquiry Type
            </label>
            <select id="inquiry-type" name="inquiry_type" className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:ring-0 focus:border-secondary transition-colors py-4 text-xl appearance-none">
              <option className="text-on-background">Lead Generation</option>
              <option className="text-on-background">AI Agent Building</option>
              <option className="text-on-background">Growth Consulting</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-on-secondary py-6 font-black uppercase tracking-[0.2em] text-sm hover:-translate-y-1 transition-transform"
          >
            Initialize Partnership
          </button>
        </form>
      </div>
    </section>
  );
}
