export default function Hero() {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex flex-col pt-36 pb-16 md:pt-48 md:pb-24 px-8 max-w-screen-2xl mx-auto">
      <div className="my-auto">
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
          <p className="text-base md:text-3xl font-light leading-snug mb-8">
            16+ years of experience engineering high-performance growth loops
            and proprietary AI frameworks.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8 md:mt-12">
            <a href="#contact" className="bg-on-background text-surface px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-secondary text-center inline-block">
              Scale Now
            </a>
            <a href="#ai-seo" className="border-2 border-on-background text-on-background px-6 py-4 md:px-10 md:py-5 text-sm md:text-base font-bold uppercase tracking-widest transition-all hover:bg-surface-container text-center inline-block">
              Our Thesis
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
