export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 px-8 max-w-screen-2xl mx-auto">
      <div className="mb-8">
        <span className="font-label uppercase tracking-[0.3em] text-sm text-secondary font-bold">
          Growth Strategy &amp; Implementation
        </span>
      </div>

      <h1 className="text-giant font-black uppercase mb-12">
        Achieve
        <br />
        <span className="text-primary-container">Product-Led</span>
        <br />
        Growth
      </h1>

      <div className="stagger-grid">
        <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 border-l-4 border-on-surface pl-8 py-4">
          <p className="text-2xl md:text-4xl font-light leading-tight mb-8">
            16+ years of experience engineering high-performance growth loops
            and proprietary AI frameworks.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-on-background text-surface px-10 py-5 font-bold uppercase tracking-widest transition-all hover:bg-secondary inline-block">
              Scale Now
            </a>
            <a href="#lead-gen" className="border-2 border-on-background text-on-background px-10 py-5 font-bold uppercase tracking-widest transition-all hover:bg-surface-container inline-block">
              Our Thesis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
